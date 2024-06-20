import { searchAnagrams1, searchAnagrams2 } from "./index";

describe("searchAnagrams1", () => {
  it.each([
    {
      input: { str: "eat", strs: ["eat", "tea", "tan", "ate", "nat", "bat"] },
      expected: ["eat", "tea", "ate"],
    },
  ])("should search for anagrams", ({ input, expected }) => {
    // Arrange
    const { str, strs } = input;
    // Act
    const result = searchAnagrams1(str, strs);

    // Assert
    expect(result).toEqual(expected);
  });
});

describe("searchAnagrams2", () => {
  it.each([
    {
      input: { str: "eat", strs: ["eat", "tea", "tan", "ate", "nat", "bat"] },
      expected: ["eat", "tea", "ate"],
    },
  ])("should search for anagrams", ({ input, expected }) => {
    // Arrange
    const { str, strs } = input;
    // Act
    const result = searchAnagrams2(str, strs);

    // Assert
    expect(result).toEqual(expected);
  });
});
