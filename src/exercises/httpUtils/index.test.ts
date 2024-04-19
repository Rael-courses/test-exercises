import axios from "axios";
import { httpGet } from "./";

describe("httpGet", () => {
  let axiosGetSpy: jest.SpyInstance;
  beforeAll(() => {
    axiosGetSpy = jest.spyOn(axios, "get");
  });

  it("should get the data from an URL", async () => {
    // arrange
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    axiosGetSpy.mockImplementation(() => Promise.resolve({ data: {} }));

    // act
    await httpGet(url);

    // assert
    expect(axiosGetSpy).toHaveBeenCalledWith(url);
    expect(axiosGetSpy).toHaveBeenCalledTimes(1);
  });
});
