import compFunc from "../lib/stringCompareToListOrder";

const SWORDS = "S";
const COINS = "D";
const RODS = "B";
const CUPS = "C";

const ORDERED_LIST = [SWORDS, COINS, RODS, CUPS];

const comparator = (a, b) => compFunc(ORDERED_LIST, a, b);

export { SWORDS, COINS, RODS, CUPS, ORDERED_LIST, comparator };
