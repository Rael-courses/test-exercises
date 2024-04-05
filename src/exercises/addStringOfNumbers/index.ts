export function addStringOfNumbers(input: string) {
  if (input === "") return 0;

  const isHavingBadSeparator = /[^-,.\d]/.test(input);
  if (isHavingBadSeparator) throw new Error("Not valid separator");

  if (!input.includes(",")) {
    const num = Number(input);
    if (isNaN(num)) throw new Error("Not valid number");
    return num;
  }

  const arr = input.split(",");
  return arr.reduce((acc, str) => {
    const num = Number(str);
    if (isNaN(num)) throw new Error("Not valid numbers");

    return acc + num;
  }, 0);
}
