import { container } from "tsyringe";
import { AgeValidation } from "./index";

describe("AgeValidation", () => {
  const ageValidation = container.resolve(AgeValidation);

  describe("validateAge", () => {
    it.each([
      { input: "1", expected: 1 },
      { input: "18", expected: 18 },
      { input: "100", expected: 100 },
    ])(
      "should return a number when given a string if represents a valid age",
      ({ input, expected }) => {
        // arrange
        // act
        const result = ageValidation.validateAge(input);

        // assert
        expect(result).toBe(expected);
      }
    );

    it.each([{ input: "-2", expected: "Input must be a valid age" }])(
      "should throw an error if input does not represent a valid age",
      ({ input, expected }) => {
        // arrange
        // act
        const act = () => ageValidation.validateAge(input);

        // assert
        expect(act).toThrow(expected);
      }
    );
  });
});
