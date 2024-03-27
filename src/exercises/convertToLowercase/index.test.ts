import { convertToLowercase } from "./index";

describe("convertToLowercase", () => {
  it.each([
    { input: "ToTO", expected: "toto" },
    { input: "ToTo", expected: "toto" },
    { input: "TOTo", expected: "toto" },
  ])(
    "should return the input in lowercase when all letters are uppercases",
    ({ input, expected }) => {
      // arrange
      // act
      const result = convertToLowercase(input);

      // assert
      expect(result).toEqual(expected);
    }
  );
});
