import { singleton } from "tsyringe";
import { UserManager } from "./userManager";
import { User, UserInput } from "./types";

@singleton()
export class UserService {
  public constructor(private userManager: UserManager) {}

  public async createUser(userInput: UserInput): Promise<User> {
    const validatedUserInput = this.validateUserInput(userInput);
    const userDB = await this.userManager.addUser(validatedUserInput);
    const user: User = {
      id: userDB.id,
      username: userDB.username,
      age: userDB.age,
      isAdult: userDB.age >= 18,
    };

    return user;
  }

  private validateUserInput(userInput: UserInput): UserInput {
    if (userInput.username === "") {
      throw new Error("Username cannot be empty");
    }

    if (!/^[a-zA-Z0-9]+$/.test(userInput.username)) {
      throw new Error(
        "Username is invalid, it must contain only alphanumeric characters"
      );
    }

    const isAgeValid = Number.isInteger(userInput.age) && userInput.age > 0;
    if (!isAgeValid) {
      throw new Error("Age must be a positive integer");
    }

    return userInput;
  }

  public async getUsersAverageAge(): Promise<number> {
    const users = await this.userManager.getUsers();
    const totalAge = users.reduce((acc, user) => acc + user.age, 0);
    const averageAge = totalAge / users.length;

    return averageAge;
  }
}
