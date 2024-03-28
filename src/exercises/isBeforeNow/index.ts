export function isBeforeNow(date: Date): boolean {
  return date.getTime() < Date.now();
}
