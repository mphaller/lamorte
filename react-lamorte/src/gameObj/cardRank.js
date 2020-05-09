import compFunc from "../lib/stringCompareToListOrder";

const LA_MORTE = "☺";
const ACE = "1";
const KING = "R";
const QUEEN = "D";
const CAVALIER = "C";
const JACK = "V";
const TEN = "10";
const NINE = "9";
const EIGHT = "8";
const SEVEN = "7";

const ORDERED_LIST = [
  LA_MORTE,
  ACE,
  KING,
  QUEEN,
  CAVALIER,
  JACK,
  TEN,
  NINE,
  EIGHT,
  SEVEN,
];

const comparator = (a, b) => compFunc(ORDERED_LIST, a, b);

export {
  LA_MORTE,
  ACE,
  KING,
  QUEEN,
  CAVALIER,
  JACK,
  TEN,
  NINE,
  EIGHT,
  SEVEN,
  ORDERED_LIST,
  comparator,
};
