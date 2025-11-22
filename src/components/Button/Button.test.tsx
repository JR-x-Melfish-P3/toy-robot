import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("passes native attributes to the button element", () => {
    const id = "ID";

    render(<Button id={id}>Click Me</Button>);

    expect(screen.getByRole("button", { name: "Click Me" })).toHaveAttribute(
      "id",
      id
    );
  });

  test("merges class names", () => {
    render(<Button className="bg-red-500 px-8">Click Me</Button>);

    expect(screen.getByRole("button", { name: "Click Me" })).toHaveClass(
      "bg-red-500",
      "px-4"
    );
  });
});
