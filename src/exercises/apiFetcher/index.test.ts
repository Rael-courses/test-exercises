import { fetchApi } from "./";
import axios from "axios";

describe("fetchApi", () => {
  it("should call fetch from node-fetch with correct params", async () => {
    // Arrange
    const mockUrl = "https://jsonplaceholder.typicode.com/posts/1";
    const mockResponse = {
      userId: 1,
      id: 1,
      title: "Hello, World!",
      body: "Hello, World!",
    };

    axios.get = jest.fn().mockResolvedValue({ data: mockResponse });

    // Act
    const result = await fetchApi(mockUrl);

    // Assert
    expect(result).toEqual(mockResponse);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(mockUrl);
  });
});
