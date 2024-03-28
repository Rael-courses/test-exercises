import { divide } from "./index";

describe("divide", () => {
  it("should divide two numbers", () => {
    // Arrange
    const num1 = 4;
    const num2 = 2;

    // Act
    const result = divide(num1, num2);

    // Assert
    expect(result).toBe(2);
  });

  it("should throw when divide by 0", () => {
    // Arrange
    const num1 = 4;
    const num2 = 0;

    // Act
    const act = () => divide(num1, num2);

    // Assert
    expect(act).toThrow("Cannot divide by 0");
  });
});
