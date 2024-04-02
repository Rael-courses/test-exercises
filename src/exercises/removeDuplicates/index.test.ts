import { removeDuplicates } from "./index";

describe("removeDuplicates", () => {
  it("should multiply all numbers of 2 arrays", () => {
    // Arrange
    const arr = [1, 2, 2, 2, 3, 3, 4];

    // Act
    const result = removeDuplicates(arr);

    // Assert
    expect(result).toStrictEqual([1, 2, 3, 4]);
  });
});
