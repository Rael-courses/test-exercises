import { container } from "tsyringe";
import { UserService } from "./index";
import { UserManager } from "./userManager";

describe("userService", () => {
  const userService = container.resolve(UserService);

  describe("createUser", () => {
    let userManagerAddUserSpy: jest.SpyInstance;
    beforeEach(() => {
      userManagerAddUserSpy = jest.spyOn(UserManager.prototype, "addUser");
    });

    afterEach(() => {
      userManagerAddUserSpy.mockClear();
      userManagerAddUserSpy.mockRestore();
    });

    it("should throw an error if the userInput is invalid because of username empty and not register the user", async () => {
      // arrange
      const userInput = {
        username: "",
        age: 18,
      };

      // act
      const act = async () => userService.createUser(userInput);

      // assert
      await expect(act).rejects.toThrow("Username cannot be empty");
      expect(userManagerAddUserSpy).not.toHaveBeenCalled();
    });

    it.each([
      {
        username: "JohnDoe$",
        age: 18,
      },
      {
        username: "John-Doe",
        age: 18,
      },
    ])(
      "should throw an error if the userInput is invalid because of username invalid and not register the user",
      async (userInput) => {
        // arrange

        // act
        const act = async () => userService.createUser(userInput);

        // assert
        await expect(act).rejects.toThrow(
          "Username is invalid, it must contain only alphanumeric characters"
        );
        expect(userManagerAddUserSpy).not.toHaveBeenCalled();
      }
    );

    it.each([
      {
        username: "JohnDoe",
        age: 0,
      },
      {
        username: "JohnDoe",
        age: 18.2,
      },
      {
        username: "JohnDoe",
        age: -1,
      },
    ])(
      "should throw an error if the userInput is invalid because of age not a positive integer and not register the user",
      async (userInput) => {
        // arrange

        // act
        const act = async () => userService.createUser(userInput);

        // assert
        await expect(act).rejects.toThrow("Age must be a positive integer");
        expect(userManagerAddUserSpy).not.toHaveBeenCalled();
      }
    );

    it.each([
      {
        input: {
          username: "JohnDoe06",
          age: 18,
        },
        expected: {
          id: 1,
          username: "JohnDoe06",
          age: 18,
          isAdult: true,
        },
      },
      {
        input: {
          username: "JaneDoe",
          age: 17,
        },
        expected: {
          id: 2,
          username: "JaneDoe",
          age: 17,
          isAdult: false,
        },
      },
    ])(
      "should register a valid user and return the user object with the id and isAdult property set correctly",
      async ({ input: userInput, expected }) => {
        // arrange
        userManagerAddUserSpy.mockResolvedValue(expected);

        // act
        const user = await userService.createUser(userInput);

        // assert
        expect(userManagerAddUserSpy).toHaveBeenCalledWith(userInput);
        expect(userManagerAddUserSpy).toHaveBeenCalledTimes(1);
        expect(user).toStrictEqual(expected);
      }
    );
  });

  describe("getUsersAverageAge", () => {
    let userManagerGetUsersSpy: jest.SpyInstance;
    beforeEach(() => {
      userManagerGetUsersSpy = jest.spyOn(UserManager.prototype, "getUsers");
    });

    afterEach(() => {
      userManagerGetUsersSpy.mockClear();
      userManagerGetUsersSpy.mockRestore();
    });

    it("should return the average age of all users", async () => {
      // arrange
      userManagerGetUsersSpy.mockResolvedValue([
        { id: 1, username: "JohnDoe06", age: 18 },
        { id: 2, username: "JaneDoe", age: 17 },
        { id: 3, username: "FooBar", age: 25 },
      ]);

      // act
      const averageAge = await userService.getUsersAverageAge();

      // assert
      expect(userManagerGetUsersSpy).toHaveBeenCalledTimes(1);
      expect(averageAge).toBe(20);
    });
  });
});
