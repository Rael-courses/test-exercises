export function multiplyArrays(a: number[], b: number[]): number[] {
  if (a.length === 0 || b.length === 0) {
    throw new Error("Arrays must have at least one element");
  }

  if (a.length !== b.length) {
    throw new Error("Arrays must have the same length");
  }

  const output: number[] = new Array(a.length);
  for (let i = 0; i < output.length; i++) {
    output[i] = a[i] * b[i];
  }

  return output;
}
