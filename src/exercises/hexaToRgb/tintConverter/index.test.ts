import { container } from "tsyringe";
import { TintConverter } from "./";

describe("tintConverter", () => {
  const tintConverter = container.resolve(TintConverter);

  it("should throw an error because it is empty", () => {
    // arrange
    // act
    const act = () => tintConverter.hexToNum("");

    // assert
    expect(act).toThrow("Teinte hexadécimale invalide, teinte vide");
  });

  it.each(["B", "0AC"])(
    "should throw an error because it has not 2 characters",
    (input) => {
      // arrange
      // act
      const act = () => tintConverter.hexToNum(input);

      // assert
      expect(act).toThrow(
        "Teinte hexadécimale invalide, la teinte doit contenir 2 caractères"
      );
    }
  );

  it.each(["-G", "1.", "G0", "0G"])(
    "should throw an error because of invalid characters",
    (input) => {
      // arrange
      // act
      const act = () => tintConverter.hexToNum(input);

      // assert
      expect(act).toThrow("Teinte hexadécimale invalide, caractère non valide");
    }
  );

  it.each([
    { input: "00", expected: 0 },
    { input: "9A", expected: 154 },
    { input: "FF", expected: 255 },
  ])(
    "should convert a valid hex tint to its rgb equivalent",
    ({ input, expected }) => {
      const rgbEquivalent = tintConverter.hexToNum(input);

      expect(rgbEquivalent).toBe(expected);
    }
  );
});
