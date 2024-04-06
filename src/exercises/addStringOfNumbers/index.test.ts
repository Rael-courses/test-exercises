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
  ])(
    "should add two comma separated numbers in a string",
    ({ input, expected }) => {
      // arrange
      // act
      const result = addStringOfNumbers(input);

      // assert
      expect(result).toBe(expected);
    }
  );

  it("should throw an error when given a string with wrong separator", () => {
    // arrange
    const input = "-2.5;3";

    // act
    const act = () => addStringOfNumbers(input);

    // assert
    expect(act).toThrow("Invalid characters");
  });
});
