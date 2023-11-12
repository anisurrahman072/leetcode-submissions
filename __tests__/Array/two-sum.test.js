import TestFunction from "../../src/Array/two-sum/solution_A";

describe("TestFunction", () => {
  test("should return the expected value", () => {
    const result = TestFunction([3, 3], 6);

    expect(result).toEqual([0, 1]);
  });

  test("should return the expected value", () => {
    const result = TestFunction([3, 2, 4], 6);

    expect(result).toEqual([1, 2]);
  });

  test("should return the expected value", () => {
    const result = TestFunction([2, 7, 11, 15], 9);

    expect(result).toEqual([0, 1]);
  });

  test("should return the expected value", () => {
    const result = TestFunction([12, 45, 23, 89, 24, 56, 34], 46);

    expect(result).toEqual([0, 6]);
  });
});
