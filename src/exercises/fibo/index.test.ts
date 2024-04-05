import { fibo } from "./index";

describe("fibo", () => {
  it("should return 0 when given 0", () => {
    // arrange
    const input = 0;
    const expected = 0;

    // act
    const result = fibo(input);

    // assert
    expect(result).toBe(expected);
  });

  it("should return 1 when given 1", () => {
    // arrange
    const input = 1;
    const expected = 1;

    // act
    const result = fibo(input);

    // assert
    expect(result).toBe(expected);
  });

  it.each([
    {
      input: 2,
      expected: 1,
    },
    {
      input: 3,
      expected: 2,
    },
    {
      input: 4,
      expected: 3,
    },
    {
      input: 5,
      expected: 5,
    },
    {
      input: 6,
      expected: 8,
    },
  ])("should return fibo(n) when given n", ({ input, expected }) => {
    // arrange
    // act
    const result = fibo(input);

    // assert
    expect(result).toBe(expected);
  });
});
