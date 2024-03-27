import { removeDuplicates } from "./index";

describe("removeDuplicates", () => {
  it("should multiply all numbers of 2 arrays", () => {
    // arrange
    const arr = [1, 2, 2, 2, 3, 3, 4];

    // act
    const result = removeDuplicates(arr);

    // assert
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
