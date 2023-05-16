import GAME_CONFIG from "../config.json";
import * as GAMEDETAILS from "../version";

export default class Game extends HoneyPot.Game {
    constructor(initData) {
        super(initData);
    }

    // eslint-disable-next-line class-methods-use-this
    setupTweaker() {}

    // async setupGraphicsDriver() {
    //     await super.setupGraphicsDriver();
    //     globalThis.__PIXI_APP__ = this.app.app;
    // }

    setupEventListener() {
        super.setupEventListener();

        // HoneyPot.AppEventListener.addEventListener(HoneyPot.eventsDictionary.browserEvents.KEYUP_DETECTED, (data) => {
        //     if (data.code === "KeyS") {
        //         // ! lets stop the game sending status updates
        //         HoneyPot.AppEventListener.dispatchEvent(HoneyPot.eventsDictionary.connection.CONNECTION_STOP_GAMESTATUS_POLLING, null, this);
        //     }
        // });
    }
}

document.addEventListener(
    "DOMContentLoaded",
    () => {
        // eslint-disable-next-line no-undef
        const game = new Game(GAME_INIT_DATA);
        game.init({
            gameConfig: GAME_CONFIG,
            gameName: GAMEDETAILS.GAMENAME,
            gameVersion: GAMEDETAILS.VERSION,
        });
    },
    { once: true }
);
