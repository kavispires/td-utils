import { getRandomNumber } from "./getRandomNumber";

describe("getRandomNumber", () => {
  it("should return a number between the given minimum and maximum values (inclusive)", () => {
    const min = 1;
    const max = 10;
    const result = getRandomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it("should return a different number each time it is called", () => {
    const min = 1;
    const max = 10;
    const results = Array.from({ length: 10 }, () => getRandomNumber(min, max));
    expect(new Set(results).size).toBeGreaterThan(1);
  });
});
