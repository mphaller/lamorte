import uuid from 'uuid-random';

export const card = (rank, suit) => {
    return {
        id: uuid(),
        rank: rank,
        suit: suit,
    };
}
