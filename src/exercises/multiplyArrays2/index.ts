export function multiplyArrays(arr1: number[], arr2: number[]): number[] {
  const isSameLength = arr1.length === arr2.length;

  if (!isSameLength) throw new Error("Arrays must be the same length");

  const isOneEmpty = arr1.length === 0 || arr2.length === 0;
  if (isOneEmpty) throw new Error("Arrays must not be empty");

  return arr1.map((num, index) => num * arr2[index]);
}
