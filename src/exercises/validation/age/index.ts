import { singleton } from "tsyringe";
import { NumberValidation } from "../number";

@singleton()
export class AgeValidation {
  public constructor(private numberValidation: NumberValidation) {}

  public validateAge(input: string) {
    try {
      let number: number = this.numberValidation.validateInteger(input);
      number = this.numberValidation.validatePositive(input);

      return number;
    } catch (error) {
      throw new Error("Input must be a valid age");
    }
  }
}
