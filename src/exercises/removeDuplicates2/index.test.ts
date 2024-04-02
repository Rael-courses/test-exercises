import { removeDuplicates } from "./index";

describe("removeDuplicates", () => {
  it("should remove duplicates from an array", () => {
    // arrange
    const arr = [1, 2, 2, 3, 4, 4, 5];

    // act
    const result = removeDuplicates(arr);

    // assert
    expect(result).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
