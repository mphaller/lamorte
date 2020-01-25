import { player } from '../../src/gameObj';
import { DEFAULT_NAME } from '../../src/gameObj/player';

describe('gameObj player', () => {
    test('generates the player state with an assigned name', () => {
        const name = 'iria';
        const result = player(name);
        expect(result).toBeDefined();
        expect(result.name).toEqual(name);
        expect(result.score).toEqual(0);
        expect(result.bid).toBeNull();
        expect(result.tricks).toEqual(0);
        expect(result.hand).toBeDefined();
    });
    test('generates the player state with a default name', () => {
        const result = player();
        expect(result).toBeDefined();
        expect(result.name).toEqual(DEFAULT_NAME);
    });
});
