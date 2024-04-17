const defaultSeparator = ",";

export function addStringOfNumbers(input: string) {
  if (input === "") return 0;

  const customSeparatorMatches = input.match(/^\/\/(.+)\n/);
  const customSeparator = customSeparatorMatches
    ? customSeparatorMatches[1]
    : null;

  const separator = customSeparator || defaultSeparator;
  const isContainingBadSeparator = /[-.]/.test(separator);
  if (isContainingBadSeparator) throw new Error("Invalid custom separator");

  const isSeparatorMadeWithSameCharacters = !separator
    .split("")
    .some((char) => char !== separator[0]);
  if (!isSeparatorMadeWithSameCharacters)
    throw new Error("Invalid custom separator");

  // Regex to catch any character that is not a digit, dot, minus sign or separator
  const badCharactersRegex = new RegExp(`[^-.\\d${separator}]`);

  const focusedExpression = customSeparator ? input.split("\n")[1] : input;
  const isContainingBadCharacters = badCharactersRegex.test(focusedExpression);
  if (isContainingBadCharacters) throw new Error("Invalid characters");

  if (!focusedExpression.includes(separator)) {
    const num = Number(focusedExpression);
    if (isNaN(num)) throw new Error("Not valid number");
    return num;
  }

  const arr = focusedExpression.split(separator);
  return arr.reduce((acc, str) => {
    const num = Number(str);
    if (isNaN(num)) throw new Error("Not valid numbers");

    return acc + num;
  }, 0);
}
