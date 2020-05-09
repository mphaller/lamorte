import Player from "./Player";
import Card from "./Card";

class GameState {
    players: Player[];
    dealer?: number;
    round: number;
    deck: Card[];
    gameOver: boolean;
    constructor() {
        this.players = [];
        this.round = 1;
        this.deck = [];
        this.gameOver = true;
    };
}

export { GameState as default };