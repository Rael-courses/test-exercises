import { Severity, logger } from "./";

describe("logger", () => {
  it("should log the input text as error when severity is error", () => {
    // arrange
    const text = "Hello world!";
    const severity: Severity = "error";
    console.error = jest.fn();

    // act
    logger(text, severity);

    // assert
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(text);
  });

  it("should log the input text as warning when severity is warning", () => {
    // arrange
    const text = "Hello world!";
    const severity: Severity = "warning";
    console.warn = jest.fn();

    // act
    logger(text, severity);

    // assert
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenCalledWith(text);
  });

  it("should log the input text as info when severity is info", () => {
    // arrange
    const text = "Hello world!";
    const severity: Severity = "info";
    console.info = jest.fn();

    // act
    logger(text, severity);

    // assert
    expect(console.info).toHaveBeenCalledTimes(1);
    expect(console.info).toHaveBeenCalledWith(text);
  });

  it("should log the input text as simple log when no severity is provided", () => {
    // arrange
    const text = "Hello world!";
    console.log = jest.fn();

    // act
    logger(text);

    // assert
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(text);
  });
});
