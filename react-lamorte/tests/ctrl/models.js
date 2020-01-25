import * as models from '../../src/ctrl/models';
import * as gameObj from '../../src/gameObj';
import * as _ from 'lodash';

jest.mock('../../src/gameObj');
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
            models.createGame();
            expect(gameObj.gameState).toHaveBeenCalled();
        });
    });
    describe('createDeck', () => {
        test('generates the La Morte deck', () => {
            models.createDeck();
            expect(gameObj.deck).toHaveBeenCalled();
        });
    });
    describe('createPlayers', () => {
        test('generates player data', () => {
            const names = ['frodo', 'bilbo', 'gandalf'];
            models.createPlayers(names);
            expect(gameObj.player).toHaveBeenCalledTimes(names.length);
            for(let i = 0; i < names.length; i++) {
                expect(gameObj.player).toHaveBeenCalledWith(names[i]);
            }
        });
    });
    describe('shuffle', () => {
        test('uses lodash to shuffle an array', () => {
            const names = ['wei', 'wu', 'shuhan'];
            models.shuffle(names);
            expect(_.shuffle).toHaveBeenCalled();
        });
    });
});
