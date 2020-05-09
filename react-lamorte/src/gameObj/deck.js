import * as _ from "lodash";

import { card } from "./card";
import { ORDERED_LIST as suitList } from "./cardSuit";
import { LA_MORTE, ORDERED_LIST as rankList } from "./cardRank";

export const deck = () => {
  let cards = [];
  cards.push(card(LA_MORTE, null));
  for (const s in suitList) {
    const suitedRanks = _.filter(rankList, (rank) => rank !== LA_MORTE);
    for (const r in suitedRanks) {
      cards.push(card(suitedRanks[r], suitList[s]));
    }
  }
  return cards;
};
