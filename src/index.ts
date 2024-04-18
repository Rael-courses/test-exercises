import "reflect-metadata";
import "./extensions";
import { container } from "tsyringe";
import chalk from "chalk";
import { Prompter } from "./exercises/prompter";

async function start() {
  console.log("Application starts...");

  const hexColorInput = await container
    .resolve(Prompter)
    .prompt("Entrez une couleur hexadécimale (format #RRGGBB) : ");

  console.log(
    chalk.hex(hexColorInput)(
      "Ce texte est affiché avec la couleur hexadécimale spécifiée."
    )
  );

  console.log("Application ends...");
}

start();
