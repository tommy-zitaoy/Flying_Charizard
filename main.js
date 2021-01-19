var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/sky.png")
ASSET_MANAGER.queueDownload("./sprites/charmander.png")
ASSET_MANAGER.queueDownload("./sprites/charmeleon.png")
ASSET_MANAGER.queueDownload("./sprites/charizard.png")
ASSET_MANAGER.queueDownload("./sprites/charizard_reverse.png")
ASSET_MANAGER.queueDownload("./sprites/platform.png")
ASSET_MANAGER.queueDownload("./sprites/evolve_effect.png")

ASSET_MANAGER.downloadAll(function () {
	
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});
