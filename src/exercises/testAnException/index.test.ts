import { throwAnException } from "./index";

describe("testAnException", () => {
  it("should throw an exception", () => {
    // Arrange
    // Act
    const act = () => {
      throwAnException();
    };

    // Assert
    expect(act).toThrow("I am an exception");
  });
});
