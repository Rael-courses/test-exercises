import { container } from "tsyringe";
import { NumberValidation } from "./index";

describe("NumberValidation", () => {
  const numberValidation = container.resolve(NumberValidation);

  describe("validateNumber", () => {
    it.each([
      { input: "0", expected: 0 },
      { input: "1", expected: 1 },
      { input: "-1", expected: -1 },
      { input: "1.67", expected: 1.67 },
      { input: "-1.67", expected: -1.67 },
      { input: "-1e7", expected: -1e7 },
    ])(
      "should return a number when given a string if valid",
      ({ input, expected }) => {
        // arrange
        // act
        const result = numberValidation.validateNumber(input);

        // assert
        expect(result).toBe(expected);
      }
    );

    it("should throw an error if input is not a number", () => {
      // arrange
      const input = "a";

      // act
      const act = () => numberValidation.validateNumber(input);

      // assert
      expect(act).toThrow("Input must be a number");
    });
  });

  describe("validateInteger", () => {
    it.each([
      { input: "0", expected: 0 },
      { input: "1", expected: 1 },
      { input: "-1", expected: -1 },
      { input: "1e3", expected: 1e3 },
    ])(
      "should return an integer when given a string if valid",
      ({ input, expected }) => {
        // arrange
        // act
        const result = numberValidation.validateInteger(input);

        // assert
        expect(result).toBe(expected);
      }
    );

    it.each([
      { input: "1.67", expected: "Input must be an integer" },
      { input: "-1.67", expected: "Input must be an integer" },
      { input: "1e-3", expected: "Input must be an integer" },
    ])(
      "should throw an error if input is not an integer",
      ({ input, expected }) => {
        // arrange
        // act
        const act = () => numberValidation.validateInteger(input);

        // assert
        expect(act).toThrow(expected);
      }
    );
  });

  describe("validatePositive", () => {
    it.each([
      { input: "0", expected: 0 },
      { input: "1", expected: 1 },
      { input: "1.67", expected: 1.67 },
      { input: "1e3", expected: 1e3 },
    ])(
      "should return a positive number when given a string if valid",
      ({ input, expected }) => {
        // arrange
        // act
        const result = numberValidation.validatePositive(input);

        // assert
        expect(result).toBe(expected);
      }
    );

    it.each([
      { input: "-1", expected: "Input must be positive" },
      { input: "-1.67", expected: "Input must be positive" },
      { input: "-1e3", expected: "Input must be positive" },
    ])(
      "should throw an error if input is not positive",
      ({ input, expected }) => {
        // arrange
        // act
        const act = () => numberValidation.validatePositive(input);

        // assert
        expect(act).toThrow(expected);
      }
    );
  });
});
