import { multiply } from "./index";

describe("multiply", () => {
  it("should multiply two numbers", () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;

    // Act
    const result = multiply(num1, num2);

    // Assert
    expect(result).toBe(6);
  });
});
