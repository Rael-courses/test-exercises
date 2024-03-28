import { isBeforeNow } from "./index";

const dateBefore = new Date("2022-01-01T00:00:00.000Z");
const dateNow = new Date("2023-01-01T00:00:00.000Z");
const dateAfter = new Date("2024-01-01T00:00:00.000Z");

describe("isBeforeNow", () => {
  beforeEach(() => {
    jest.useFakeTimers({
      now: dateNow,
    });

    // or

    // jest.spyOn(Date, "now").mockReturnValue(dateNow.getTime());
  });

  afterEach(() => {
    jest.useRealTimers();

    // or

    // jest.restoreAllMocks();
  });

  it("returns true if the date is before now", () => {
    expect(isBeforeNow(dateBefore)).toBe(true);
  });

  it("returns false if the date is now", () => {
    expect(isBeforeNow(dateNow)).toBe(false);
  });

  it("returns false if the date is after now", () => {
    expect(isBeforeNow(dateAfter)).toBe(false);
  });
});
