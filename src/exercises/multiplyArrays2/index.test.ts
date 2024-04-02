import { multiplyArrays } from "./index";

describe("multiplyArrays", () => {
  it.each([
    { arr1: [1, 2, 3], arr2: [4, 5, 6], expected: [4, 10, 18] },
    { arr1: [-1, -2, -3], arr2: [4, -5, 6], expected: [-4, 10, -18] },
    {
      arr1: [-1.1, -2.1, -3.1],
      arr2: [4, -5, 6],
      expected: [-4.4, 10.5, -18.6],
    },
  ])("should multiply two arrays", ({ arr1, arr2, expected }) => {
    // arrange
    // act
    const result = multiplyArrays(arr1, arr2);

    // assert
    expect(result).toStrictEqual(expected);
  });

  it("should throw an error if arrays are not the same length", () => {
    // arrange
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5];

    // act
    const act = () => multiplyArrays(arr1, arr2);

    // assert
    expect(act).toThrow("Arrays must be the same length");
  });

  it("should throw an error if arrays are empty", () => {
    // arrange
    const arr1: number[] = [];
    const arr2: number[] = [];

    // act
    const act = () => multiplyArrays(arr1, arr2);

    // assert
    expect(act).toThrow("Arrays must not be empty");
  });
});
