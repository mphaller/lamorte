import * as actions from '../../src/ctrl/actions';
import * as models from '../../src/ctrl/models';
import {
    defaultPlayers,
    initialState,
    laMorteReducer,
} from '../../src/ctrl/reducer';

jest.mock('../../src/ctrl/models');

describe('laMorteReducer', () => {
    describe('action types', () => {
        describe('GAME_RESET', () => {
            test('sets the initialState', () => {
                const state = { test: true };
                const action = actions.gameReset();
                const result = laMorteReducer(state, action);
                expect(result).toEqual(initialState);
            });
        });
        describe('GAME_START', () => {
            test('starts the game', () => {
                const state = { test: true };
                const action = actions.gameStart();
                const result = laMorteReducer(state, action);
                expect(result.gameOver).toBeDefined();
                expect(result.gameOver).toBeFalsy();
            });
        });
        describe('PLAYERS_LOAD', () => {
            test('creates four players', () => {
                const state = { test: true };
                const action = actions.playersLoad();
                laMorteReducer(state, action);
                expect(models.createPlayers).toHaveBeenCalledWith(defaultPlayers);
            });
        });
        describe('DEALER_ELECT', () => {
            test('chooses a dealer from among the players', () => {
                const state = { 
                    test: true,
                    players: defaultPlayers
                };
                const action = actions.dealerElect();
                laMorteReducer(state, action);
                expect(models.randomIndex).toHaveBeenCalledWith(defaultPlayers.length);
            });
        });
        describe('DECK_LOAD', () => {
            test('creates a deck to play with', () => {
                const state = { test: true };
                const action = actions.deckLoad();
                laMorteReducer(state, action);
                expect(models.createDeck).toHaveBeenCalled();
            });
        });
        describe('DECK_SHUFFLE', () => {
            test('shuffles the deck', () => {
                const state = {
                    test: true,
                    deck: ['cleese', 'idle', 'chapman', 'jones', 'gilliam', 'palin']
                };
                const action = actions.deckShuffle();
                laMorteReducer(state, action);
                expect(models.shuffle).toHaveBeenCalledWith(state.deck);
            });
        });
    });
    test('initialState', () => {
        const action = { type: 'TEST' };
        const result = laMorteReducer(undefined, action);
        expect(result).toEqual(initialState);
    });
    test('default does not alter state', () => {
        const state = { test: true };
        const action = { type: 'TEST' };
        const result = laMorteReducer(state, action);
        expect(result).toEqual(state);
    });
});