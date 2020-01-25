import uuid from 'uuid-random';

export const card = (rank, suit) => {
    return {
        id: uuid(),
        rank: rank ? rank : null,
        suit: suit ? suit : null,
    };
}