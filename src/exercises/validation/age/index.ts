import { NumberValidation } from "../number";

export class AgeValidation {
  public validateAge(input: string) {
    try {
      let number: number = new NumberValidation().validateInteger(input);
      number = new NumberValidation().validatePositive(input);

      return number;
    } catch (error) {
      throw new Error("Input must be a valid age");
    }
  }
}
