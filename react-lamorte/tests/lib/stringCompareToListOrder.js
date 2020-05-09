import compFunc from "../../src/lib/stringCompareToListOrder";

const sortedList = ["three", "two", "four", "one"];

describe("comparatorByListOrder", () => {
  test("compares two strings", () => {
    const a = "three";
    const b = "four";
    const abResult = compFunc(sortedList, a, b);
    const baResult = compFunc(sortedList, b, a);
    const aaResult = compFunc(sortedList, a, a);
    expect(abResult).toBeGreaterThan(0);
    expect(baResult).toBeLessThan(0);
    expect(aaResult).toEqual(0);
  });
  test("handles non-rank values", () => {
    const a = "two";
    const b = "whoa";
    const abResult = compFunc(sortedList, a, b);
    const baResult = compFunc(sortedList, b, a);
    const bbResult = compFunc(sortedList, b, b);
    expect(abResult).toBeGreaterThan(0);
    expect(baResult).toBeLessThan(0);
    expect(bbResult).toEqual(0);
  });
  test("handles missing values", () => {
    const a = "one";
    const aResult = compFunc(sortedList, a);
    const noArgsResult = compFunc(sortedList);
    expect(aResult).toEqual(0);
    expect(noArgsResult).toEqual(0);
  });
  test("handles nonsense values", () => {
    const a = "four";
    const junkObj = { what: "one" };
    const junkNum = 34;
    const junkList = [junkObj, junkNum];
    const junkObjResult = compFunc(sortedList, a, junkObj);
    const junkNumResult = compFunc(sortedList, a, junkNum);
    const junkListResult = compFunc(sortedList, a, junkList);
    const nullResult = compFunc(sortedList, a, null);
    expect(junkObjResult).toEqual(0);
    expect(junkNumResult).toEqual(0);
    expect(junkListResult).toEqual(0);
    expect(nullResult).toEqual(0);
  });
});
