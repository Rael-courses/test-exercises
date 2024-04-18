import { container } from "tsyringe";
import { Prompter } from "./";
import * as readline from "readline";

jest.mock("readline");

describe("Prompter", () => {
  let prompter: Prompter;

  beforeEach(() => {
    container.clearInstances(); // Ensures fresh instances for each test
    prompter = container.resolve(Prompter);
  });

  describe("prompt", () => {
    it("should return the string input", async () => {
      // Arrange
      const mockQuestion = "Please enter a string:";
      const mockAnswer = "Hello, World!";
      const mockReadlineInterface = {
        question: jest
          .fn()
          .mockImplementation((_, callback) => callback(mockAnswer)),
        close: jest.fn(),
      };

      jest
        .spyOn(readline, "createInterface")
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        .mockReturnValue(mockReadlineInterface);

      // Act
      const result = await prompter.prompt(mockQuestion);

      // Assert
      expect(result).toBe(mockAnswer);
      expect(mockReadlineInterface.question).toHaveBeenCalledWith(
        mockQuestion,
        expect.any(Function)
      );
      expect(mockReadlineInterface.close).toHaveBeenCalled();
    });
  });
});
