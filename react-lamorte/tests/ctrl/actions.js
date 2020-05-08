import configureStore from "redux-mock-store";

import * as actions from "../../src/ctrl/actions";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("ctrl actions", () => {
  describe("dealerElect", () => {
    test("Dispatches the DEALER_ELECT action", () => {
      const store = mockStore({});
      store.dispatch(actions.dealerElect());
      const result = store.getActions();
      expect(result[0].type).toEqual(actions.DEALER_ELECT);
    });
  });
  describe("deckLoad", () => {
    test("Dispatches the DECK_LOAD action", () => {
      const store = mockStore({});
      store.dispatch(actions.deckLoad());
      const result = store.getActions();
      expect(result[0].type).toEqual(actions.DECK_LOAD);
    });
  });
  describe("deckShuffle", () => {
    test("Dispatches the DECK_SHUFFLE action", () => {
      const store = mockStore({});
      store.dispatch(actions.deckShuffle());
      const result = store.getActions();
      expect(result[0].type).toEqual(actions.DECK_SHUFFLE);
    });
  });
  describe("gameReset", () => {
    test("Dispatches the GAME_RESET action", () => {
      const store = mockStore({});
      store.dispatch(actions.gameReset());
      const result = store.getActions();
      expect(result[0].type).toEqual(actions.GAME_RESET);
    });
  });
  describe("gameStart", () => {
    test("Dispatches the GAME_START action", () => {
      const store = mockStore({});
      store.dispatch(actions.gameStart());
      const result = store.getActions();
      expect(result[0].type).toEqual(actions.GAME_START);
    });
  });
  describe("playersLoad", () => {
    test("Dispatches the PLAYERS_LOAD action", () => {
      const store = mockStore({});
      store.dispatch(actions.playersLoad());
      const result = store.getActions();
      expect(result[0].type).toEqual(actions.PLAYERS_LOAD);
    });
  });
});
