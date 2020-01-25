import * as _ from 'lodash';

import * as gameObj from '../gameObj';

export const randomIndex = (len) => Math.floor(Math.random() * len);

export const createGame = () => gameObj.gameState();

export const createDeck = () => gameObj.deck();

export const createPlayers = (names) => {
    let players = [];
    for (const i in names) {
        players.push(gameObj.player(names[i]));
    }
    return players;
}

export const shuffle = (deck) => _.shuffle(deck);
