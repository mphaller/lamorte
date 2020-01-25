export const GAME_RESET = "GAME_RESET";
export const ELECT_DEALER = "ELECT_DEALER";
export const LOAD_PLAYERS = "LOAD_PLAYERS";
export const LOAD_DECK = "LOAD_DECK";
export const SHUFFLE_DECK = "SHUFFLE_DECK";

export const gameReset = () => {
    return { type: GAME_RESET };
}
export const electDealer = () => {
    return { type: ELECT_DEALER };
}
export const loadPlayers = () => {
    return { type: LOAD_PLAYERS };
}
export const loadDeck = () => {
    return { type: LOAD_DECK };
}
export const shuffleDeck = () => {
    return { type: SHUFFLE_DECK };
}
