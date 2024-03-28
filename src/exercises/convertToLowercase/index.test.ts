import { convertToLowercase } from "./index";

describe("convertToLowercase", () => {
  it.each([
    { input: "ToTO", expected: "toto" },
    { input: "ToTo", expected: "toto" },
    { input: "TOTo", expected: "toto" },
  ])(
    "should return the input in lowercase when all letters are uppercases",
    ({ input, expected }) => {
      // Arrange
      // Act
      const result = convertToLowercase(input);

      // Assert
      expect(result).toEqual(expected);
    }
  );
});
