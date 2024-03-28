import { square } from "./index";

describe("square", () => {
  it("returns the number pow 2", () => {
    // Arrange
    const num = 3;
    Math.pow = jest.fn(); //.mockReturnValue(2);

    // Act
    square(num);

    // Assert
    expect(Math.pow).toHaveBeenCalledTimes(1);
    expect(Math.pow).toHaveBeenCalledWith(3, 2);

    // expect(square(num)).toBe(2);
  });
});
