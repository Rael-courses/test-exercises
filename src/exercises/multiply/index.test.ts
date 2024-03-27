import { multiply } from "./index";

describe("multiply", () => {
  it("should multiply two numbers", () => {
    // arrange
    const num1 = 2;
    const num2 = 3;

    // act
    const result = multiply(num1, num2);

    // assert
    expect(result).toBe(6);
  });
});
