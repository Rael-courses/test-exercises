export function addStringOfNumbers(input: string) {
  if (input === "") return 0;

  const isContainingBadCharacters = /[^-,.\d]/.test(input);
  if (isContainingBadCharacters) throw new Error("Invalid characters");

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
