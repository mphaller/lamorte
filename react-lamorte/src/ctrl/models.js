import * as _ from "lodash";

import { deck } from "../gameObj/deck";
import { gameState } from "../gameObj/gameState";
import { player } from "../gameObj/player";
import { comparator as cardRankComp } from "../gameObj/cardRank";
import { comparator as cardSuitComp } from "../gameObj/cardSuit";

export const randomIndex = (len) => Math.floor(Math.random() * len);

export const createGame = () => gameState();

export const createDeck = () => deck();

export const createPlayers = (names) => {
  let players = [];
  for (const i in names) {
    players.push(player(names[i]));
  }
  return players;
};

export const shuffle = (deck) => _.shuffle(deck);

export const draw = (deck, numberToDraw) =>
  _.remove(deck, (card, i) => i < numberToDraw);

export const sortCards = (deck) =>
  _.orderBy(deck, ["suit", "rank"], [cardSuitComp, cardRankComp]);
