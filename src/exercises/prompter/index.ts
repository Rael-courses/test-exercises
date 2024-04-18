import { singleton } from "tsyringe";
import readline from "readline";

@singleton()
export class Prompter {
  public async prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }
}
