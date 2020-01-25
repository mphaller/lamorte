export const DEALER_ELECT = "DEALER_ELECT";
export const DECK_LOAD = "DECK_LOAD";
export const DECK_SHUFFLE = "DECK_SHUFFLE";
export const GAME_RESET = "GAME_RESET";
export const GAME_START = "GAME_START";
export const PLAYERS_LOAD = "PLAYERS_LOAD";

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
