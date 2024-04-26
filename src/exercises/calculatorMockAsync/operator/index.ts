import { singleton } from "tsyringe";

@singleton()
export class Operator {
  public async add(num1: number, num2: number): Promise<number> {
    await this.fakeDelay();
    return num1 + num2;
  }

  public async multiply(num1: number, num2: number): Promise<number> {
    await this.fakeDelay();
    return num1 * num2;
  }

  public async divide(num1: number, num2: number): Promise<number> {
    await this.fakeDelay();

    if (num2 === 0) {
      throw new Error("Division by 0 not allowed");
    }

    return num1 / num2;
  }

  private fakeDelay(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
}
