import configureStore from 'redux-mock-store';

import * as actions from '../../src/ctrl/actions';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('ctrl actions', () => {
  describe('gameReset', () => {
    test('Dispatches the GAME_RESET action', () => {
      const store = mockStore({});
      store.dispatch(actions.gameReset());
      const result = store.getActions();
      expect(result[0].type).toEqual(actions.GAME_RESET);
    });
  });
  describe('electDealer', () => {
    test('Dispatches the ELECT_DEALER action', () => {
      const store = mockStore({});
      store.dispatch(actions.electDealer());
      const result = store.getActions();
      expect(result[0].type).toEqual(actions.ELECT_DEALER);
    });
  });
  describe('loadPlayers', () => {
    test('Dispatches the LOAD_PLAYERS action', () => {
      const store = mockStore({});
      store.dispatch(actions.loadPlayers());
      const result = store.getActions();
      expect(result[0].type).toEqual(actions.LOAD_PLAYERS);
    });
  });  
  describe('loadDeck', () => {
    test('Dispatches the LOAD_DECK action', () => {
      const store = mockStore({});
      store.dispatch(actions.loadDeck());
      const result = store.getActions();
      expect(result[0].type).toEqual(actions.LOAD_DECK);
    });
  });
  describe('shuffleDeck', () => {
    test('Dispatches the SHUFFLE_DECK action', () => {
      const store = mockStore({});
      store.dispatch(actions.shuffleDeck());
      const result = store.getActions();
      expect(result[0].type).toEqual(actions.SHUFFLE_DECK);
    });
  });
});
