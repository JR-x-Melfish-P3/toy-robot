import cn from "./cn";

describe("cn", () => {
  it("joins multiple class strings", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("filters falsy values", () => {
    // eslint-disable-next-line no-constant-binary-expression
    expect(cn("foo", false && "bar", undefined, "baz")).toBe("foo baz");
  });

  it("handles conditional objects", () => {
    expect(cn("foo", { bar: true, baz: false })).toBe("foo bar");
  });

  it("resolves conflicting Tailwind classes, last one wins", () => {
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
    expect(cn("p-4", "p-2")).toBe("p-2");
  });
});
