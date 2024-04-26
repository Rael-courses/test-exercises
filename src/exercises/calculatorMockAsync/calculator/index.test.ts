import { container } from "tsyringe";
import { Calculator } from "./index";
import { Operator } from "../operator";

describe("Calculator", () => {
  const calculator = container.resolve(Calculator);
  const operator = container.resolve(Operator);

  describe("calculate", () => {
    it("should call Operator.add when the operator is 'add'", async () => {
      // arrange
      const addSpy = jest.spyOn(Operator.prototype, "add").mockImplementation();

      // act
      await calculator.calculate(1, 2, "add");

      // assert
      expect(addSpy).toHaveBeenCalledTimes(1);
      expect(addSpy).toHaveBeenCalledWith(1, 2);
    });

    it("should call Operator.multiply when the operator is 'multiply'", async () => {
      // arrange
      operator.multiply = jest.fn();

      // act
      await calculator.calculate(1, 2, "multiply");

      // assert
      expect(operator.multiply).toHaveBeenCalledTimes(1);
      expect(operator.multiply).toHaveBeenCalledWith(1, 2);
    });

    it("should call Operator.divide when the operator is 'divide'", async () => {
      // arrange
      operator.divide = jest.fn();

      // act
      await calculator.calculate(1, 2, "divide");

      // assert
      expect(operator.divide).toHaveBeenCalledTimes(1);
      expect(operator.divide).toHaveBeenCalledWith(1, 2);
    });
  });
});
