import * as _ from "lodash";

import Card from "./Card";
import { ORDERED_LIST as suitList } from "./CardSuit";
import { LA_MORTE, ORDERED_LIST as rankList } from "./CardRank";

class Deck {
  cards: Card[];
  constructor() {
    this.cards = [];
    this.cards.push(new Card(LA_MORTE));
    for (const s in suitList) {
      const suitedRanks = _.filter(rankList, (rank) => rank !== LA_MORTE);
      for (const r in suitedRanks) {
        this.cards.push(new Card(suitedRanks[r], suitList[s]));
      }
    }
  }
}

export { Deck as deault };