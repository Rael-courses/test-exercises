import { container } from "tsyringe";
import { ColorConverter } from "./";

describe("colorConverter", () => {
  const colorConverter = container.resolve(ColorConverter);

  it("should throw an error because it is empty", () => {
    // arrange
    // act
    const act = () => colorConverter.hexToRgb("");

    // assert
    expect(act).toThrow("Couleur hexadécimale invalide, ne doit pas être vide");
  });

  it.each(["A25F01", "2#3E56D", "23#E56D"])(
    "should throw an error because it does not starting by #",
    (input) => {
      // arrange
      // act
      const act = () => colorConverter.hexToRgb(input);

      // assert
      expect(act).toThrow(
        "Couleur hexadécimale invalide, doit commencer par #"
      );
    }
  );

  it.each(["#A25F0", "#A25F012"])(
    "should throw an error because it does not contains exactly 3 pairs of characters",
    (input) => {
      // arrange
      // act
      const act = () => colorConverter.hexToRgb(input);

      // assert
      expect(act).toThrow(
        "Couleur hexadécimale invalide, doit contenir 3 paires de caractères"
      );
    }
  );

  it.each(["#A25F0G", "#A2.F01"])(
    "should throw an error because it contains invalid characters",
    (input) => {
      // arrange
      // act
      const act = () => colorConverter.hexToRgb(input);

      // assert
      expect(act).toThrow(
        "Couleur hexadécimale invalide, caractères invalides"
      );
    }
  );

  it.each([
    { input: "#BD3F0A", expected: "rgb(189,63,10)" },
    { input: "#A3BF7E", expected: "rgb(163,191,126)" },
  ])(
    "should convert a valid hex color to its rgb equivalent",
    ({ input, expected }) => {
      const rgbEquivalent = colorConverter.hexToRgb(input);

      expect(rgbEquivalent).toBe(expected);
    }
  );
});
