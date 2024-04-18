import { singleton } from "tsyringe";
import { TintConverter } from "../tintConverter";

@singleton()
export class ColorConverter {
  public constructor(private readonly tintConverter: TintConverter) {}

  public hexToRgb(hex: string): string {
    if (hex === "") {
      throw new Error("Couleur hexadécimale invalide, ne doit pas être vide");
    }

    if (!hex.startsWith("#")) {
      throw new Error("Couleur hexadécimale invalide, doit commencer par #");
    }

    const hexWithoutSharp = hex.slice(1);
    if (hexWithoutSharp.length !== 6) {
      throw new Error(
        "Couleur hexadécimale invalide, doit contenir 3 paires de caractères"
      );
    }

    const hexRed = hexWithoutSharp.slice(0, 2);
    const hexGreen = hexWithoutSharp.slice(2, 4);
    const hexBlue = hexWithoutSharp.slice(4, 6);

    try {
      const red = this.tintConverter.hexToNum(hexRed);
      const green = this.tintConverter.hexToNum(hexGreen);
      const blue = this.tintConverter.hexToNum(hexBlue);

      return `rgb(${red},${green},${blue})`;
    } catch {
      throw new Error("Couleur hexadécimale invalide, caractères invalides");
    }
  }
}
