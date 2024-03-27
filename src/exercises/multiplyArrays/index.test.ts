import { multiplyArrays } from "./index";

describe("multiplyArrays", () => {
  it.each([
    {
      arr1: [1, 2, 3],
      arr2: [4, 5, 6],
      expected: [4, 10, 18],
    },
    {
      arr1: [3, 2, 3],
      arr2: [4, 5, 3],
      expected: [12, 10, 9],
    },
  ])("should multiply all numbers of 2 arrays", ({ arr1, arr2, expected }) => {
    // arrange
    // act
    const result = multiplyArrays(arr1, arr2);

    // assert
    expect(result).toEqual(expected);
  });

  it("should throw when one array is empty", () => {
    // arrange
    const arr1 = [1, 2, 3];
    const arr2: number[] = [];

    // act
    const act = () => multiplyArrays(arr1, arr2);

    // assert
    expect(act).toThrow("Arrays must have at least one element");
  });

  it("should throw when arrays length is different", () => {
    // arrange
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5];

    // act
    const act = () => multiplyArrays(arr1, arr2);

    // assert
    expect(act).toThrow("Arrays must have the same length");
  });
});
