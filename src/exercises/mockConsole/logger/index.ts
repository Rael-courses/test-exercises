export type Severity = "error" | "warning" | "info";

export function logger(text: string, severity?: Severity): void {
  if (severity === "error") {
    return console.error(text);
  }

  if (severity === "warning") {
    return console.warn(text);
  }

  if (severity === "info") {
    return console.info(text);
  }

  return console.log(text);
}
