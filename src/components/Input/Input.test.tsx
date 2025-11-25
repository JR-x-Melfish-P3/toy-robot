import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  test("renders label", () => {
    render(<Input label="Username" />);

    expect(
      screen.getByRole("textbox", { name: "Username" })
    ).toBeInTheDocument();
  });

  test("passes native attributes to the input element", () => {
    const id = "INPUT_ID";

    render(<Input id={id} placeholder="Email" />);

    expect(screen.getByPlaceholderText("Email")).toHaveAttribute("id", id);
  });

  test("merges class names", () => {
    render(<Input className="bg-blue-500 px-8" placeholder="Username" />);

    expect(screen.getByPlaceholderText("Username")).toHaveClass(
      "bg-blue-500",
      "px-4"
    );
  });
});
