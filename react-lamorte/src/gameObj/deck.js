import { card } from './card';
import cardSuit from './cardSuit';
import cardRank from './cardRank';

export const deck = () => {
    let cards = [card(cardRank.LA_MORTE, null)];
    for (const s in cardSuit) {
        for (let r = cardRank.SEVEN; r < cardRank.LA_MORTE; r++) {
            cards.push(card(cardRank[r], cardSuit[s]));
        }
    }
    return cards;
}
