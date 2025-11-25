import turn from "./turn";

describe("turn", () => {
  test("turns left", () => {
    const result = turn("left", 1);

    expect(result).toBe(0);
  });

  test("turns right", () => {
    const result = turn("right", 1);

    expect(result).toBe(2);
  });

  test("turns within 4", () => {
    const result = turn("left", 0);

    expect(result).toBe(3);
  });

  test("turns over 4", () => {
    const result = turn("left", 10);

    expect(result).toBe(1);
  });

  test("turns negative", () => {
    const result = turn("left", -1);

    expect(result).toBe(2);
  });
});
