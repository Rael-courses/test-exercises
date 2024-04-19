import { square } from "./";

describe("square", () => {
  // it("should return the square of the input number (jest.fn)", () => {
  //   // arrange
  //   const input = 5;
  //   Math.pow = jest.fn();

  //   // act
  //   const result = square(input);

  //   // assert
  //   expect(Math.pow).toHaveBeenCalledTimes(1);
  //   expect(Math.pow).toHaveBeenCalledWith(input, 2);
  //   expect(result).toBe(25);
  // });

  it("should return the square of the input number (jest.spyOn)", () => {
    // arrange
    const input = 5;
    const spy = jest.spyOn(Math, "pow");

    // act
    square(input);

    // assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(input, 2);
  });

  it("should return the square of the input number (jest.spyOn)", () => {
    // arrange
    const input = 3;
    const spy = jest.spyOn(Math, "pow");

    jest.clearAllMocks();

    // act
    const result = square(input);

    // assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(input, 2);
    expect(result).toBe(9);
  });
});
