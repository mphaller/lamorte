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
                const spy = jest.spyOn(models, 'createPlayers');
                laMorteReducer(state, action);
                expect(spy).toHaveBeenCalledWith(defaultPlayers);
            });
        });
        describe('DEALER_ELECT', () => {
            test('chooses a dealer from among the players', () => {
                const state = { 
                    test: true,
                    players: defaultPlayers
                };
                const action = actions.dealerElect();
                const spy = jest.spyOn(models, 'randomIndex');
                laMorteReducer(state, action);
                expect(spy).toHaveBeenCalledWith(defaultPlayers.length);
            });
        });
        describe('DECK_LOAD', () => {
            test('creates a deck to play with', () => {
                const state = { test: true };
                const action = actions.deckLoad();
                const spy = jest.spyOn(models, 'createDeck');
                laMorteReducer(state, action);
                expect(spy).toHaveBeenCalled();
            });
        });
        describe('DECK_SHUFFLE', () => {
            test('shuffles the deck', () => {
                const state = {
                    test: true,
                    deck: ['cleese', 'idle', 'chapman', 'jones', 'gilliam', 'palin']
                };
                const action = actions.deckShuffle();
                const spy = jest.spyOn(models, 'shuffle');
                laMorteReducer(state, action);
                expect(spy).toHaveBeenCalledWith(state.deck);
            });
        });
        describe('ROUND_DEAL', () => {
            test('deals cards from the deck to 4 players', () => {
                const state = {
                    test: true,
                    players: [{hand: []},{hand: []},{hand: []},{hand: []}],
                    deck: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
                }
                const spies = [
                    jest.spyOn(models, 'draw'),
                    jest.spyOn(models, 'sortCards'),
                ];
                const action = actions.roundDeal();
                laMorteReducer(state, action);
                for (let s in spies) {
                    expect(spies[s]).toHaveBeenCalled();
                }
            });
        });
    });
    test('default does not alter state', () => {
        const state = { test: true };
        const action = { type: 'TEST' };
        const result = laMorteReducer(state, action);
        expect(result).toEqual(state);
    });
});