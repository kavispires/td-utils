/**
 * Generates a random number between the given minimum and maximum values (inclusive).
 * @param min The minimum value (inclusive).
 * @param max The maximum value (inclusive).
 * @returns A random number between the given minimum and maximum values (inclusive).
 */
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
