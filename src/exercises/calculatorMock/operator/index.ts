import { singleton } from "tsyringe";

@singleton()
export class Operator {
  public add(num1: number, num2: number) {
    return num1 + num2;
  }

  public multiply(num1: number, num2: number) {
    return num1 * num2;
  }

  public divide(num1: number, num2: number) {
    if (num2 === 0) {
      throw new Error("Division by 0 not allowed");
    }

    return num1 / num2;
  }
}
