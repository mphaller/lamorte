import compFunc from "../lib/stringCompareToListOrder";

const SWORDS = "♠";
const COINS = "♦";
const RODS = "♣";
const CUPS = "♥";

const ORDERED_LIST = [SWORDS, COINS, RODS, CUPS];

const comparator = (a: string, b: string) => compFunc(ORDERED_LIST, a, b);

export { SWORDS, COINS, RODS, CUPS, ORDERED_LIST, comparator };
