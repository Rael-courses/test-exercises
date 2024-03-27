import { throwAnException } from "./index";

describe("testAnException", () => {
  it("should throw an exception", () => {
    // arrange
    // act
    const act = () => {
      throwAnException();
    };

    // assert
    expect(act).toThrow("I am an exception");
  });
});
