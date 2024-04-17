import { addStringOfNumbers } from "./index";

describe("addStringOfNumbers", () => {
  it("should return 0 when given an empty string", () => {
    // arrange
    const input = "";
    const expected = 0;

    // act
    const result = addStringOfNumbers(input);

    // assert
    expect(result).toBe(expected);
  });

  it.each([
    { input: "12", expected: 12 },
    { input: "1.5", expected: 1.5 },
    { input: "-2", expected: -2 },
    { input: "-2.333", expected: -2.333 },
  ])(
    "should return n when given the string representation of n",
    ({ input, expected }) => {
      // arrange
      // act
      const result = addStringOfNumbers(input);

      // assert
      expect(result).toBe(expected);
    }
  );

  it.each(["--4", "1-23", "3..5"])(
    "should throw an error when given a string that is not a number",
    (input) => {
      // arrange
      // act
      const act = () => addStringOfNumbers(input);

      // assert
      expect(act).toThrow("Not valid number");
    }
  );

  it.each([
    { input: "2,3", expected: 5 },
    { input: "-2.5,4", expected: 1.5 },
    { input: "1,2,5,9", expected: 17 },
    { input: "1,-3.2,3.7,2", expected: 3.5 },
  ])(
    "should add any quantity of comma separated numbers in a string",
    ({ input, expected }) => {
      // arrange
      // act
      const result = addStringOfNumbers(input);

      // assert
      expect(result).toBe(expected);
    }
  );

  it("should throw when given a string with wrong separator", () => {
    // arrange
    const input = "-2.5;3";

    // act
    const act = () => addStringOfNumbers(input);

    // assert
    expect(act).toThrow("Invalid characters");
  });

  it.each([
    { input: "//;\n1;2", expected: 3 },
    { input: "//:\n-2.5:4", expected: 1.5 },
    { input: "//;\n1;2;5;9", expected: 17 },
  ])(
    "should add any quantity of numbers separated by a custom character in a string",
    ({ input, expected }) => {
      // arrange
      // act
      const result = addStringOfNumbers(input);

      // assert
      expect(result).toBe(expected);
    }
  );

  it.each(["//.\n1.2", "//-\n-2.5-4"])(
    "should throw when the custom separator is not valid",
    (input) => {
      // arrange
      // act
      const act = () => addStringOfNumbers(input);

      // assert
      expect(act).toThrow("Invalid custom separator");
    }
  );

  it.each([
    { input: "//;;;\n1;;;2", expected: 3 },
    { input: "//::\n-2.5::4", expected: 1.5 },
  ])(
    "should add any quantity of numbers separated by a custom character in a string",
    ({ input, expected }) => {
      // arrange
      // act
      const result = addStringOfNumbers(input);

      // assert
      expect(result).toBe(expected);
    }
  );
});
