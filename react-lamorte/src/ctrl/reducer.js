import { createStore } from "redux";

import * as actions from "./actions";
import * as models from "./models";

export const initialState = { gameOver: true };
export const defaultPlayers = ["North", "East", "South", "West"];

export const laMorteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GAME_RESET:
      return { ...initialState };
    case actions.GAME_START:
      return {
        ...state,
        gameOver: false,
      };
    case actions.PLAYERS_LOAD:
      return {
        ...state,
        players: models.createPlayers(defaultPlayers),
      };
    case actions.DEALER_ELECT:
      return {
        ...state,
        dealer: models.randomIndex(state.players.length),
      };
    case actions.DECK_LOAD:
      return {
        ...state,
        deck: models.createDeck(),
      };
    case actions.DECK_SHUFFLE:
      return {
        ...state,
        deck: models.shuffle(state.deck),
      };
    case actions.ROUND_DEAL:
      const result = { ...state };
      for (const i in result.players) {
        const player = result.players[i];
        player.hand = models.sortCards(models.draw(state.deck, 9));
      }
      return result;
    default:
      return { ...state };
  }
};

export const gameStore = createStore(laMorteReducer, initialState);
