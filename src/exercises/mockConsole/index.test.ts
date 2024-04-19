function log(message: string) {
  console.log(message);
}
describe("log", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it.each(["Toto", "Tata"])("should log the input text", (input) => {
    // arrange
    jest.spyOn(console, "log");
    // act
    log(input);
    // assert
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(input);
  });
});
