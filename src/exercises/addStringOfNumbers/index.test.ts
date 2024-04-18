import { addStringOfNumbers, extractSeparators, parse } from "./index";
import { extractNumbers } from "./index";

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

  it.each(["--4", "1-23", "3..5", "-2.5;3"])(
    "should throw an error when given a string with wrong separator",
    (input) => {
      // arrange
      // act
      const act = () => addStringOfNumbers(input);

      // assert
      expect(act).toThrow("Invalid separator");
    }
  );

  it("should add multiple comma separated numbers in a string", () => {
    // arrange
    const input = "1,2,3,4,5";
    const expected = 15;

    // act
    const result = addStringOfNumbers(input);

    // assert
    expect(result).toBe(expected);
  });

  it("should add multiple numbers separated by custom separators", () => {
    // arrange
    const input = "//;\n1;2";
    const expected = 3;

    // act
    const result = addStringOfNumbers(input);

    // assert
    expect(result).toBe(expected);
  });
});

describe("extractSeparators", () => {
  it("should return an array of separators given a string input without numbers", () => {
    // arrange
    const input = "//;\n;";
    const expected = {
      [";"]
    };

    // act
    const result = extractSeparators(input);

    // assert
    expect(result).toStrictEqual(expected);
  });
});

describe("extractNumbers", () => {
  it.each([
    { input: "1", expected: { numbers: [1], inputWithoutNumbers: "" } },
    {
      input: "1.5:-2;6/5.50",
      expected: { numbers: [1.5, -2, 6, 5.5], inputWithoutNumbers: ":;/" },
    },
    {
      input: "-5.7899,1.2,23,25,15,45.765",
      expected: {
        numbers: [-5.7899, 1.2, 23, 25, 15, 45.765],
        inputWithoutNumbers: ",,,,,",
      },
    },
    {
      input: "1--0.56",
      expected: { numbers: [1, -0.56], inputWithoutNumbers: "-" },
    },
    {
      input: "-0.5678",
      expected: { numbers: [-0.5678], inputWithoutNumbers: "" },
    },
    {
      input: "000.4567",
      expected: { numbers: [0.4567], inputWithoutNumbers: "" },
    },
  ])(
    `should return an array of numbers contained in a given string`,
    ({ input, expected }) => {
      // arrange
      // act
      const result = extractNumbers(input);

      // assert
      expect(result).toStrictEqual(expected);
    }
  );
});

describe("parse", () => {
  it.each([
    { input: "1", expected: { numbers: [1], separators: [] } },
    {
      input: "1.5:-2;6/5.50",
      expected: { numbers: [1.5, -2, 6, 5.5], separators: [":", ";", "/"] },
    },
    {
      input: "-5.7899,1.2,23,25,15,45.765",
      expected: {
        numbers: [-5.7899, 1.2, 23, 25, 15, 45.765],
        separators: [",", ",", ",", ",", ","],
      },
    },
    {
      input: "1--0.56",
      expected: { numbers: [1, -0.56], separators: ["-"] },
    },
    {
      input: "-0.5678",
      expected: { numbers: [-0.5678], separators: [] },
    },
    {
      input: "000.4567",
      expected: { numbers: [0.4567], separators: [] },
    },
  ])(
    `should parse a string input and return an array of numbers and separators`,
    ({ input, expected }) => {
      // arrange
      // act
      const result = parse(input);

      // assert
      expect(result).toStrictEqual(expected);
    }
  );
});
