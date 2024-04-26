import { singleton } from "tsyringe";
import { Operator } from "../operator";

@singleton()
export class Calculator {
  public constructor(private operator: Operator) {}

  public calculate(
    num1: number,
    num2: number,
    operator: keyof Operator
  ): number {
    return this.operator[operator](num1, num2);
  }
}
