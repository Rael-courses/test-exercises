import { Operator } from "./index";
import { container } from "tsyringe";

describe("Operator", () => {
  const operator = container.resolve(Operator);

  describe("add", () => {
    it("should return the addition result of two numbers", () => {
      // arrange
      const num1 = 3;
      const num2 = 4;
      const expected = 7;

      // act
      const result = operator.add(num1, num2);

      // assert
      expect(result).toBe(expected);
    });
  });

  describe("multiply", () => {
    it("should return the multiplication result of two numbers", () => {
      // arrange
      const num1 = 3;
      const num2 = 4;
      const expected = 12;

      // act
      const result = operator.multiply(num1, num2);

      // assert
      expect(result).toBe(expected);
    });
  });

  describe("divide", () => {
    it("should throw 'Division by 0 not allowed' when dividing by 0", () => {
      // arrange
      const num1 = 12;
      const num2 = 0;

      // act
      const act = () => operator.divide(num1, num2);

      // assert
      expect(act).toThrow("Division by 0 not allowed");
    });

    it("should return the division result of two numbers", () => {
      // arrange
      const num1 = 12;
      const num2 = 4;
      const expected = 3;

      // act
      const result = operator.divide(num1, num2);

      // assert
      expect(result).toBe(expected);
    });
  });
});
