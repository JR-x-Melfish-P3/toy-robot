import turn from "./turn";

describe("turn", () => {
  test("turns within 4", () => {
    const result = turn(3, 0);

    expect(result).toBe(3);
  });

  test("turns over 4", () => {
    const result = turn(3, 10);

    expect(result).toBe(1);
  });

  test("turns negative", () => {
    const result = turn(3, -1);

    expect(result).toBe(2);
  });
});
