import * as _ from 'lodash';

import { card } from './card';
import { cardSuit } from './cardSuit';
import { cardRank } from './cardRank';

export const deck = () => {
    let cards = [];
    const laMorteRank = _.pick(cardRank, ['LA_MORTE']);
    for (const l in laMorteRank) {
        cards.push(card(cardRank[l], null));
    }
    for (const s in cardSuit) {
        const suitedRanks = _.omit(cardRank, ['LA_MORTE']);
        for (const r in suitedRanks) {
            cards.push(card(cardRank[r], cardSuit[s]));
        }
    }
    return cards;
}
