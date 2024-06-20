export function groupAnagrams1(strs: string[]): string[][] {
  const anagrams: Record<number, string[]> = {};

  for (const str of strs) {
    const key = str
      .split("")
      .reduce((acc, char) => acc + Math.pow(char.charCodeAt(0), 4), 0);

    (anagrams[key] ??= []).push(str);
  }
  return Object.values(anagrams);
}

export function groupAnagrams2(strs: string[]): string[][] {
  const anagrams: Record<string, string[]> = {};

  for (const str of strs) {
    const key = str.split("").sort().join("");

    (anagrams[key] ??= []).push(str);
  }
  return Object.values(anagrams);
}

export function groupAnagrams3(strs: string[]): string[][] {
  const anagramsMap = new Map<string, string[]>();

  for (const word of strs) {
    const anagram = word.split("").sort().join("");

    const entry = anagramsMap.get(anagram);
    if (entry) {
      entry.push(word);
      continue;
    }

    anagramsMap.set(anagram, [word]);
  }
  return [...anagramsMap.values()];
}

export function groupAnagrams4(strs: string[]): string[][] {
  const anagramsDic: Record<string, string[]> = {};

  for (const str of strs) {
    const key = str.split("").sort().join("");

    anagramsDic[key]?.push(str) || (anagramsDic[key] = [str]);
  }
  return Object.values(anagramsDic);
}

export function groupAnagrams(strs: string[]): string[][] {
  const anagramsDic = new Map<string, string[]>();

  for (const str of strs) {
    const key = generateKey(str);

    anagramsDic.get(key)?.push(str) || anagramsDic.set(key, [str]);
  }
  return [...anagramsDic.values()];
}

const baseCharCode = "a".charCodeAt(0);
const baseKey = Array(26).fill(0);
function generateKey(str: string): string {
  const key = baseKey.map(() => 0);
  for (const char of str) {
    const charIndex = char.charCodeAt(0) - baseCharCode;
    key[charIndex]++;
  }

  return key.join("_");
}
