export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by 0");
  }

  return a / b;
}
