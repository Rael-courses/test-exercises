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

    const firstChar = hexSplit[0].toUpperCase();
    const secondChar = hexSplit[1].toUpperCase();

    const firstCharValue = this.hexToNumCorrespondance.indexOf(firstChar);
    const secondCharValue = this.hexToNumCorrespondance.indexOf(secondChar);

    if (firstCharValue === -1 || secondCharValue === -1) {
      throw new Error("Teinte hexadécimale invalide, caractère non valide");
    }

    return firstCharValue * 16 + secondCharValue;
  }
}
