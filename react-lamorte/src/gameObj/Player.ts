import Card from './Card';

const DEFAULT_NAME = 'Nameless';

class Player {
    name: string;
    score: number;
    bid?: number;
    tricks: number;
    hand: Card[];
    constructor(name: string) {
        this.name = name ? name : DEFAULT_NAME;
        this.score = 0;
        this.tricks = 0;
        this.hand = [];
    } 
}

export { Player as default, DEFAULT_NAME };