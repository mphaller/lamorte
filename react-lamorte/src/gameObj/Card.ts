import uuid from 'uuid-random';

class Card {
    id: string;
    rank: string;
    suit?: string;
    constructor(rank: string, suit?: string) {
        this.id = uuid();
        this.rank = rank;
        this.suit = suit;
    }
}

export { Card as default };