import { divide } from "./index";

describe("divide", () => {
  it("should divide two numbers", () => {
    // arrange
    const num1 = 4;
    const num2 = 2;

    // act
    const result = divide(num1, num2);

    // assert
    expect(result).toBe(2);
  });

  it("should throw when divide by 0", () => {
    // arrange
    const num1 = 4;
    const num2 = 0;

    // act
    const act = () => divide(num1, num2);

    // assert
    expect(act).toThrow("Cannot divide by 0");
  });
});
