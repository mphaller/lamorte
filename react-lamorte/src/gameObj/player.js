export const DEFAULT_NAME = 'Nameless';

export const player = (name) => {
    return {
        name: name ? name : DEFAULT_NAME,
        score: 0,
        bid: null,
        tricks: 0,
        hand: [],
    }
};
