import { singleton } from "tsyringe";

@singleton()
export class TintConverter {
  private hexToNumCorrespondance = "0123456789ABCDEF";

  public hexToNum(hex: string): number {
    if (hex === "") {
      throw new Error("Teinte hexadécimale invalide, teinte vide");
    }

    const hexSplit = hex.split("");
    if (hexSplit.length !== 2) {
      throw new Error(
        "Teinte hexadécimale invalide, la teinte doit contenir 2 caractères"
      );
    }

    const firstDigit = hexSplit[0].toUpperCase();
    const secondDigit = hexSplit[1].toUpperCase();

    const firstDigitValue = this.hexToNumCorrespondance.indexOf(firstDigit);
    const secondDigitValue = this.hexToNumCorrespondance.indexOf(secondDigit);

    if (firstDigitValue === -1 || secondDigitValue === -1) {
      throw new Error("Teinte hexadécimale invalide, caractère non valide");
    }

    return firstDigitValue * 16 + secondDigitValue;
  }
}
