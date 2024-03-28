import { toUpperCase } from "./index";

describe("toUpperCase", () => {
  it("returns the string in uppercase", () => {
    // Arrange
    const input = "hello";
    String.prototype.toUpperCase = jest.fn(); //.mockReturnValue("BLABLA");

    // Act
    toUpperCase(input);

    // Assert
    expect(input.toUpperCase).toHaveBeenCalledTimes(1);
    expect(input.toUpperCase).toHaveBeenCalledWith();

    // expect(toUpperCase(input)).toBe("BLABLA");
  });
});
