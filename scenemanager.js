class SceneManager {
    constructor(game) {
        this.game = game;

        this.charizard = new Charizard(this.game, 870, 635);
        this.loadBackground();
    };

    loadBackground() {
        // add background
        let background = new Sky(this.game, 0, 0);
        this.game.addEntity(background);

        background = new PlatformLeft(this.game, 850, 725);
        this.game.addEntity(background);

        background = new PlatformRight(this.game, 925, 725);
        this.game.addEntity(background);
        this.game.addEntity(this.charizard);
    }
}