import { createStore } from 'redux';

import * as actions from './actions';
import * as models from './models';

export const initialState = models.createGame();

export const laMorteReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GAME_RESET:
            return initialState;
        case actions.LOAD_PLAYERS:
            return {
                state,
                players: models.createPlayers(['North', 'East', 'South', 'West']),
            }
        case actions.ELECT_DEALER:
            return {
                state,
                dealer: models.randomIndex(state.players.length),
            }
        case actions.LOAD_DECK:
            return {
                state,
                deck: models.createDeck(),
            }
        case actions.SHUFFLE_DECK:
            return {
                state,
                deck: models.shuffle(state.deck),
            }
        default:
            return state
    }
}

export const gameStore = createStore(laMorteReducer, initialState);
