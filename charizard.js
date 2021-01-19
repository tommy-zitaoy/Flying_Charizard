class Charizard {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.spriteSheet_charmander = ASSET_MANAGER.getAsset("./sprites/charmander.png");
		this.spriteSheet_charmeleon = ASSET_MANAGER.getAsset("./sprites/charmeleon.png");
		this.spriteSheet_charizard= ASSET_MANAGER.getAsset("./sprites/charizard.png");
		this.spriteSheet_charizard2 = ASSET_MANAGER.getAsset("./sprites/charizard_reverse.png");
		this.spriteSheet_effect = ASSET_MANAGER.getAsset("./sprites/evolve_effect.png");

		this.facing = 0; // 0 = left, 1 = right
		this.stage = 0;
		this.velocity = { x: 0, y: 0 };
		this.evolveEffect1 = false;
		this.evolveEffect2 = false;

		this.animations = [];
		this.loadAnimation();
	};

	loadAnimation() {
		for (var i = 0; i < 6; i++) { // 3 states
			this.animations.push([]);
			for (var j = 0; j < 3; j++) {
				this.animations[i].push([]);
			}
		}

		this.animations[0][0] = new Animator(this.spriteSheet_charmander, 2, 70, 50, 50, 10, 0.20, 0, false, true);
		this.animations[1][0] = new Animator(this.spriteSheet_charmeleon, 8, 180, 70, 60, 11, 0.20, 9, false, true);
		this.animations[2][0] = new Animator(this.spriteSheet_charizard, 0, 0, 155, 143, 9, 0.15, 1, false, true);
		this.animations[2][1] = new Animator(this.spriteSheet_charizard2, 162, 0, 155, 143, 9, 0.15, 1, true, true);

		this.evolveAnimation1 = new EvolveEffect(this.game, this.x, this.y);
		this.evolveAnimation2 = new EvolveEffect2(this.game, this.x, this.y);

		//this.evolveAnimation = new Animator(this.spriteSheet_effect, 0, 150, 150 , 150, 7, 0.2, 1, false, false);
    }

	update() {
		//console.log(this.evolveEffect1, this.evolveEffect2);
		if (this.game.Space && this.stage < 2) {

			// adjust x y to make evolution look more smooth
			if (this.stage == 0) {
				this.y -= 18;
				this.evolveEffect1 = true;
			} else if (this.stage == 1) {
				this.x -= 120
				this.y -= 120;
				this.evolveEffect2 = true;
			}
			this.stage++;

			//this.evolveEffect1 = true;

			this.game.Space = false;
		}

		if (this.stage == 2) {
			const TICK = this.game.clockTick;

			const speed = 100;

			if (this.game.right) {
				this.velocity.x = speed;
			} else if (this.game.left) {
				this.velocity.x = -speed;
			} else {
				this.velocity.x = 0;
			}

			if (this.game.up) {
				this.velocity.y = -speed;
			} else if (this.game.down) {
				this.velocity.y = speed;
			} else {
				this.velocity.y = 0;
			}

			// flying in circle
			//if (this.x > 0 && this.facing == 0) {
			//	this.velocity.x = -speed;
			//} else if (this.x < 0 && this.facing == 0) {
			//	this.velocity.x = speed;
			//} else if (this.x > (PARAMS.CANVASWIDTH - 155 * 2) && this.facing == 1) {
			//	this.velocity.x = -speed;
			//}

			// if hits border
			if (this.x < 0) {
				this.x = 0;
			} else if (this.x > (PARAMS.CANVASWIDTH - 155 * 2)) {
				this.x = (PARAMS.CANVASWIDTH - 155 * 2);
			}
			if (this.y < 0) {
				this.y = 0;
			} else if (this.y > (PARAMS.CANVASHEIGHT - 143 * 2)) {
				this.y = (PARAMS.CANVASHEIGHT - 143 * 2);
			}

			this.x += this.velocity.x * TICK * 3;
			this.y += this.velocity.y * TICK * 3;

			// update direction
			if (this.velocity.x < 0) this.facing = 0;
			if (this.velocity.x > 0) this.facing = 1;

		}
	};

	draw(ctx) {
		if (this.evolveEffect1) {
			this.evolveAnimation1.draw(ctx);
		}
		if (this.evolveEffect2) {
			this.evolveAnimation2.draw(ctx);
		}

		this.animations[this.stage][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
	};
};
