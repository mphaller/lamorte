import * as cardRank from "../../src/gameObj/cardRank";
import compFunc from "../../src/lib/stringCompareToListOrder";

jest.mock("../../src/lib/stringCompareToListOrder");

describe("gameObj cardRank", () => {
  describe("comparator", () => {
    test("inkvokes the compare function", () => {
      const a = cardRank.ACE;
      const b = cardRank.CAVALIER;
      cardRank.comparator(a, b);
      expect(compFunc).toHaveBeenCalledWith(cardRank.ORDERED_LIST, a, b);
    });
  });
});
