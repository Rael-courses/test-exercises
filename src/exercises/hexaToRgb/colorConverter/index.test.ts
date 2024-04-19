import { container } from "tsyringe";
import { ColorConverter } from "./";
import { TintConverter } from "../tintConverter";

describe("colorConverter", () => {
  const colorConverter = container.resolve(ColorConverter);

  let tintConverterSpy: jest.SpyInstance;
  beforeAll(() => {
    tintConverterSpy = jest.spyOn(TintConverter.prototype, "hexToNum");
  });

  afterEach(() => {
    tintConverterSpy.mockClear();
  });

  afterAll(() => {
    tintConverterSpy.mockRestore();
  });

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
      tintConverterSpy.mockImplementation(() => {
        throw new Error();
      });

      // act
      const act = () => colorConverter.hexToRgb(input);

      // assert
      expect(act).toThrow(
        "Couleur hexadécimale invalide, caractères invalides"
      );
    }
  );

  it.each([
    {
      input: "#BD3F0A",
      expected: { r: 189, g: 63, b: 10, value: "rgb(189,63,10)" },
    },
    {
      input: "#A3BF7E",
      expected: { r: 163, g: 191, b: 126, value: "rgb(163,191,126)" },
    },
  ])(
    "should convert a valid hex color to its rgb equivalent",
    ({ input, expected }) => {
      // arrange
      const hexRed = input.substring(1, 3);
      const hexGreen = input.substring(3, 5);
      const hexBlue = input.substring(5, 7);

      tintConverterSpy
        .mockImplementationOnce(() => expected.r)
        .mockImplementationOnce(() => expected.g)
        .mockImplementationOnce(() => expected.b);

      // act
      const rgbEquivalent = colorConverter.hexToRgb(input);

      // assert
      expect(TintConverter.prototype.hexToNum).toHaveBeenCalledTimes(3);

      expect(TintConverter.prototype.hexToNum).toHaveBeenCalledWith(hexRed);
      expect(TintConverter.prototype.hexToNum).toHaveBeenCalledWith(hexGreen);
      expect(TintConverter.prototype.hexToNum).toHaveBeenCalledWith(hexBlue);
      expect(rgbEquivalent).toBe(expected.value);
    }
  );
});
