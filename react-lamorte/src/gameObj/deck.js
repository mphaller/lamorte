import uuid from 'uuid-random';

import cardSuit from './cardSuit';
import cardRank from './cardRank';

export const deck = () => {
    let cards = [{
        id: uuid(),
        rank: cardRank.LA_MORTE,
        suit: null,
    }];
    for (const s in cardSuit) {
        for (let r = cardRank.SEVEN; r < cardRank.LA_MORTE; r++) {
            cards.push({
                id: uuid(),
                rank: cardRank[r],
                suit: cardSuit[s],
            });
        }
    }
    return cards;
}
