export const DEALER_ELECT = "DEALER_ELECT";
export const DECK_LOAD = "DECK_LOAD";
export const DECK_SHUFFLE = "DECK_SHUFFLE";
export const GAME_RESET = "GAME_RESET";
export const GAME_START = "GAME_START";
export const PLAYERS_LOAD = "PLAYERS_LOAD";
export const ROUND_DEAL = "ROUND_DEAL";

export const dealerElect = () => {
    return { type: DEALER_ELECT };
}
export const deckLoad = () => {
    return { type: DECK_LOAD };
}
export const deckShuffle = () => {
    return { type: DECK_SHUFFLE };
}
export const gameReset = () => {
    return { type: GAME_RESET };
}
export const gameStart = () => {
    return { type: GAME_START };
}
export const playersLoad = () => {
    return { type: PLAYERS_LOAD };
}
export const roundDeal = () => {
    return { type: ROUND_DEAL };
}

// composite actions form game logic
// TODO how to organize this? controller file?

// this is the beginnings of an action queue
// TODO look into something to handle this
const GAME_ACTION_DELAY = 250;
const gameAction = (dispatch, actionSet) => {
    if (!actionSet) return;
    if (!dispatch) throw new Error('gameAction needs dispatch');
    for (const i in actionSet) {
        GAME_ACTION_DELAY ?
        setTimeout(() => dispatch(actionSet[i]), GAME_ACTION_DELAY*i) :
        dispatch(actionSet[i]);
    }
}

export const newGame = dispatch => {
    gameAction(dispatch, [
        gameReset(),
        playersLoad(),
        deckLoad(),
        dealerElect(),
        deckShuffle(),
        gameStart(),
        roundDeal(),
    ]);
}