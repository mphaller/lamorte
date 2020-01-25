import uuid from 'uuid-random';

import { card } from '../../src/gameObj';

jest.mock('uuid-random');

describe('gameObj card', () => {
    test('generates a card', () => {
        const result = card();
        expect(result).toBeDefined();
        expect(uuid).toHaveBeenCalled();
        expect(result.rank).toBeNull();
        expect(result.suit).toBeNull();
    });
    test('generates a card with rank and suit', () => {
        const rank = 'jinto';
        const suit = 'lafiel';
        const result = card(rank, suit);
        expect(result).toBeDefined();
        expect(result.rank).toEqual(rank);
        expect(result.suit).toEqual(suit);
    });
});