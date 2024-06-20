export function searchAnagrams1(str: string, strs: string[]): string[] {
  const sortedStr = str.split("").sort().join("");
  return strs.filter((s) => s.split("").sort().join("") === sortedStr);
}

export function searchAnagrams2(str: string, strs: string[]): string[] {
  const key = generateUniqueKey(str);
  return strs.filter((s) => generateUniqueKey(s) === key);
}

const baseCharCode = "a".charCodeAt(0);

function generateUniqueKey(str: string): string {
  return str
    .split("")
    .reduce((charCounts, char) => {
      charCounts[char.charCodeAt(0) - baseCharCode]++;
      return charCounts;
    }, new Array(26).fill(0))
    .join("_");
}
