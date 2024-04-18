export function addStringOfNumbers(input: string) {
  if (input === "") return 0;

  const { numbers } = parse(input);

  return numbers.reduce((acc, number) => acc + number, 0);
}

export function extractNumbers(input: string): {
  numbers: number[];
  inputWithoutNumbers: string;
} {
  const numberRegex = new RegExp("(-?\\d+(?:\\.\\d+)?)", "g");

  const matches = input.matchAll(numberRegex);
  const inputWithoutNumbers = input.replace(numberRegex, "");
  const numbers = Array.from(matches, (match) => Number(match[0]));

  return { numbers, inputWithoutNumbers };
}

export function extractSeparators(inputWithoutNumbers: string): {
  separators: string[];
  customSeparators: string | null;
  inputWithoutCustomSeparatorsPrefix: string;
} {
  const customSeparatorsRegex = new RegExp("//(.)\\n");
  const match = customSeparatorsRegex.exec(inputWithoutNumbers);
  const customSeparators = match?.[1] ?? null;
  const inputWithoutCustomSeparatorsPrefix = customSeparators
    ? inputWithoutNumbers.replace(customSeparatorsRegex, "")
    : inputWithoutNumbers;

  const separators = customSeparators
    ? inputWithoutCustomSeparatorsPrefix.split(customSeparators)
    : inputWithoutNumbers.split("");
  return { separators, customSeparators, inputWithoutCustomSeparatorsPrefix };
}

export function parse(input: string): {
  numbers: number[];
  separators: string[];
} {
  const { numbers, inputWithoutNumbers } = extractNumbers(input);
  const { separators, customSeparators } =
    extractSeparators(inputWithoutNumbers);

  const expectedSeparatorsQuantity = numbers.length - 1;
  const isContainingBadSeparators =
    separators.length !== expectedSeparatorsQuantity ||
    separators.some((sep) => customSeparators?.includes(sep));
  if (isContainingBadSeparators) throw new Error("Invalid separator");

  return { numbers, separators };
}
