import { fizzBuzz } from "./index";

describe("fizzBuzz", () => {
  it.each([
    {
      input: 1,
      expected: "1",
    },
    {
      input: 2,
      expected: "2",
    },
    {
      input: 4,
      expected: "4",
    },
  ])(
    "should return the number as string when given a non multiple of 3, 5 or 15",
    ({ input, expected }) => {
      // arrange
      // act
      const result = fizzBuzz(input);

      // assert
      expect(result).toBe(expected);
    }
  );

  it.each([3, 6, 9])(
    "should return 'Fizz' when given a multiple of 3",
    (input) => {
      // arrange
      // act
      const result = fizzBuzz(input);

      // assert
      expect(result).toBe("Fizz");
    }
  );

  it.each([5, 10, 20])(
    'should return "Buzz" when given a multiple of 5',
    (input) => {
      // arrange
      // act
      const result = fizzBuzz(input);

      // assert
      expect(result).toBe("Buzz");
    }
  );

  it.each([15, 30, 45])(
    'should return "FizzBuzz" when given a multiple of 15',
    (input) => {
      // arrange
      // act
      const result = fizzBuzz(input);

      // assert
      expect(result).toBe("FizzBuzz");
    }
  );
});
