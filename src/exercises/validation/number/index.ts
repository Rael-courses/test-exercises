export class NumberValidation {
  public validateNumber(input: string): number {
    const number = Number(input);

    if (isNaN(number)) {
      throw new Error("Input must be a number");
    }

    return number;
  }

  public validateInteger(input: string): number {
    const number = this.validateNumber(input);

    if (!Number.isInteger(number)) {
      throw new Error("Input must be an integer");
    }

    return number;
  }

  public validatePositive(input: string): number {
    const number = this.validateNumber(input);

    if (number < 0) {
      throw new Error("Input must be positive");
    }

    return number;
  }
}
