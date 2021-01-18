var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/sky.png")
//ASSET_MANAGER.queueDownload("./sprites/charizard.PNG")

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	gameEngine.start();

	// add background
	let background = new Sky(gameEngine, 0, 0);
	//let charizard = new Charizard(gameEngine, 700, 300, false);
	gameEngine.addEntity(background);
	//gameEngine.addEntity(charizard);
});
