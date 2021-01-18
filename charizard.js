class Charizard {
	constructor(game, x, y, reverse) {
		Object.assign(this, { game, x, y, reverse });
		if (!reverse) {
			this.spriteSheet = ASSET_MANAGER.getAsset("./sprites/charizard.png");
		} else {
			this.spriteSheet = ASSET_MANAGER.getAsset("./sprites/charizard_reverse.png");
        }

		this.animation = new Animator(this.spriteSheet, 0, 0, 155, 143, 9, 0.15, 1, false, true);
	};

	update() {

	};

	draw(ctx) {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
		//ctx.drawImage(this.spriteSheet, 117, 260, 133, 100, this.x, this.y, 133 * 2, 100 * 2)
	};
};