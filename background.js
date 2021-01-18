class Sky {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });

		this.spriteSheet = ASSET_MANAGER.getAsset("./sprites/sky.png");
	};

	update() {

	};

	draw(ctx) {
		ctx.drawImage(this.spriteSheet, 0, 0, 816, 816, this.x, this.y, 1024, 768)
	};
};

class Rayquaza {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });

		this.spriteSheet = ASSET_MANAGER.getAsset("./sprites/rayquaza.png");
	};

	update() {

	};

	draw(ctx) {
		ctx.drawImage(this.spriteSheet, 0, 0, 350, 340, this.x, this.y, 350, 340)
	};
};