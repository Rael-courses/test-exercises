import {
  groupAnagrams1,
  groupAnagrams2,
  groupAnagrams3,
  groupAnagrams4,
  groupAnagrams,
} from "./index";

describe("groupAnagrams1", () => {
  it.each([
    {
      words: ["eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      words: ["fas", "eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["fas"], ["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      words: [""],
      expected: [[""]],
    },
    {
      words: ["a"],
      expected: [["a"]],
    },
  ])("should group anagrams", ({ words, expected }) => {
    // Arrange
    // Act
    const result = groupAnagrams1(words);

    // Assert
    expect(result).toEqual(
      expect.arrayContaining(expected.map((arr) => expect.arrayContaining(arr)))
    );
  });
});

describe("groupAnagrams2", () => {
  it.each([
    {
      words: ["eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      words: ["fas", "eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["fas"], ["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      words: [""],
      expected: [[""]],
    },
    {
      words: ["a"],
      expected: [["a"]],
    },
  ])("should group anagrams", ({ words, expected }) => {
    // Arrange
    // Act
    const result = groupAnagrams2(words);

    // Assert
    expect(result).toEqual(
      expect.arrayContaining(expected.map((arr) => expect.arrayContaining(arr)))
    );
  });
});

describe("groupAnagrams3", () => {
  it.each([
    {
      words: ["eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      words: ["fas", "eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["fas"], ["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      words: [""],
      expected: [[""]],
    },
    {
      words: ["a"],
      expected: [["a"]],
    },
  ])("should group anagrams", ({ words, expected }) => {
    // Arrange
    // Act
    const result = groupAnagrams3(words);

    // Assert
    expect(result).toEqual(
      expect.arrayContaining(expected.map((arr) => expect.arrayContaining(arr)))
    );
  });
});

describe("groupAnagrams4", () => {
  it.each([
    {
      words: ["eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      words: ["fas", "eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["fas"], ["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      words: [""],
      expected: [[""]],
    },
    {
      words: ["a"],
      expected: [["a"]],
    },
  ])("should group anagrams", ({ words, expected }) => {
    // Arrange
    // Act
    const result = groupAnagrams4(words);

    // Assert
    expect(result).toEqual(
      expect.arrayContaining(expected.map((arr) => expect.arrayContaining(arr)))
    );
  });
});

describe("groupAnagrams", () => {
  it.each([
    {
      words: ["eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      words: ["fas", "eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["fas"], ["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      words: ["ddddddddddg", "dgggggggggg"],
      expected: [["dgggggggggg"], ["ddddddddddg"]],
    },
    {
      words: [""],
      expected: [[""]],
    },
    {
      words: ["a"],
      expected: [["a"]],
    },
  ])("should group anagrams", ({ words, expected }) => {
    // Arrange
    // Act
    const result = groupAnagrams(words);

    // Assert
    expect(result).toEqual(
      expect.arrayContaining(expected.map((arr) => expect.arrayContaining(arr)))
    );
  });
});
