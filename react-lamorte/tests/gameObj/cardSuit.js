import * as cardSuit from "../../src/gameObj/cardSuit";
import compFunc from "../../src/lib/stringCompareToListOrder";

jest.mock("../../src/lib/stringCompareToListOrder");

describe("gameObj cardSuit", () => {
  describe("comparator", () => {
    test("inkvokes the compare function", () => {
      const a = cardSuit.SWORDS;
      const b = cardSuit.CUPS;
      cardSuit.comparator(a, b);
      expect(compFunc).toHaveBeenCalledWith(cardSuit.ORDERED_LIST, a, b);
    });
  });
});
