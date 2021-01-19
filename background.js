class Sky {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });

		this.spriteSheet = ASSET_MANAGER.getAsset("./sprites/sky.png");
	};

	update() {

	};

	draw(ctx) {
		ctx.drawImage(this.spriteSheet, 0, 0, 816, 816, this.x, this.y, PARAMS.CANVASWIDTH, PARAMS.CANVASHEIGHT);
	};
};

class PlatformLeft {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });

		this.spriteSheet = ASSET_MANAGER.getAsset("./sprites/platform.png");
	};

	update() {

	};

	draw(ctx) {
		ctx.drawImage(this.spriteSheet, 177, 112, 30, 32, this.x, this.y, 75, 75);
	};
};

class PlatformRight {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });

		this.spriteSheet = ASSET_MANAGER.getAsset("./sprites/platform.png");
	};

	update() {

	};

	draw(ctx) {
		ctx.drawImage(this.spriteSheet, 145, 112, 30, 32, this.x, this.y, 75, 75);
	};
};

class EvolveEffect {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });

		this.spriteSheet_effect = ASSET_MANAGER.getAsset("./sprites/evolve_effect.png");
		this.evolveAnimation = new Animator(this.spriteSheet_effect, 0, 150, 150, 150, 7, 0.2, 1, false, false);
	}

	draw(ctx) {
		this.evolveAnimation.drawFrame(this.game.clockTick, ctx, this.x - 85, this.y - 100, 2);
    }
}

class EvolveEffect2 {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });

		this.spriteSheet_effect = ASSET_MANAGER.getAsset("./sprites/evolve_effect.png");
		this.evolveAnimation = new Animator(this.spriteSheet_effect, 0, 150, 150, 150, 7, 0.2, 1, false, false);
	}

	draw(ctx) {
		this.evolveAnimation.drawFrame(this.game.clockTick, ctx, this.x - 85, this.y - 100, 2);
	}
}