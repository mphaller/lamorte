import * as _ from 'lodash';

import { deck } from '../../src/gameObj/deck';
import { cardRank } from '../../src/gameObj/cardRank';


describe('gameObj deck', () => {
    test('creates a La Morte deck for 3 or 4 players', () => {
        const result = deck();
        expect(result.length).toEqual(37);
    });
    test('creates a deck with La Morte in it', () => {
        const testDeck = deck();
        const result = _.filter(testDeck, (card) => {
            return card.rank === cardRank.LA_MORTE;
        });
        const lamorte = result[0]; 
        expect(result.length).toEqual(1);
        expect(lamorte.id).toBeDefined();
        expect(lamorte.rank).toEqual(cardRank.LA_MORTE);
        expect(lamorte.suit).toBeNull();
    });
});
