import { gameState } from '../../src/gameObj/gameState';

describe('gameObj gameState', () => {
    test('generates the game state', () => {
        const result = gameState();
        expect(result).toBeDefined();
        expect(result.players).toBeDefined();
        expect(result.dealer).toBeNull();
        expect(result.deck).toBeDefined();
        expect(result.round).toEqual(1);
        expect(result.gameOver).toBeTruthy();
    });
});
