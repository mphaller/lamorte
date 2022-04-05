import * as models from '../../src/ctrl/models';
import * as deck from '../../src/gameObj/deck';
import * as player from '../../src/gameObj/player';
import * as gameState from '../../src/gameObj/gameState';
import * as _ from 'lodash';

// jest.mock('../../src/gameObj');
jest.mock('lodash');

describe('ctrl models', () => {
    describe('randomIndex', () => {
        test('uses Math to generate numbers', () => {
            const spies = [
                jest.spyOn(global.Math, 'random'),
                jest.spyOn(global.Math, 'floor')
            ];
            models.randomIndex(8);
            for (const s in spies) {
                expect(spies[s]).toHaveBeenCalled();
            }
        });
    });
    describe('createGame', () => {
        test('generates game data', () => {
            const spy = jest.spyOn(gameState, 'gameState');
            models.createGame();
            expect(spy).toHaveBeenCalled();
        });
    });
    describe('createDeck', () => {
        test('generates the La Morte deck', () => {
            const spy = jest.spyOn(deck, 'deck');
            models.createDeck();
            expect(spy).toHaveBeenCalled();
        });
    });
    describe('createPlayers', () => {
        test('generates player data', () => {
            const names = ['frodo', 'bilbo', 'gandalf'];
            const spy = jest.spyOn(player, 'player');
            models.createPlayers(names);
            expect(spy).toHaveBeenCalledTimes(names.length);
            for(let i = 0; i < names.length; i++) {
                expect(spy).toHaveBeenCalledWith(names[i]);
            }
        });
    });
    describe('shuffle', () => {
        test('uses lodash to shuffle an array', () => {
            const names = ['wei', 'wu', 'shuhan'];
            const spy = jest.spyOn(_, 'shuffle');
            models.shuffle(names);
            expect(spy).toHaveBeenCalled();
        });
    });
});
