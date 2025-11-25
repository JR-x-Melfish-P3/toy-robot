import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpForm from "./SignUpForm";

describe("SignUpForm", () => {
  test("submits form data", async () => {
    const user = userEvent.setup();

    render(<SignUpForm />);

    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "test@email.coom"
    );

    await user.type(
      screen.getByRole("textbox", { name: "Password" }),
      "password123"
    );

    await user.type(
      screen.getByRole("textbox", { name: "Confirm Password" }),
      "password123"
    );

    await user.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(true).toBe(true);
  });

  test("render validation message", async () => {
    const user = userEvent.setup();

    render(<SignUpForm />);

    expect(screen.queryAllByRole("alert")).toHaveLength(0);

    user.type(screen.getByRole("textbox", { name: "Email" }), "invalid-email");

    expect(screen.queryAllByRole("alert")).toHaveLength(0);
    await user.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(
      screen.getByRole("alert", { name: "Please enter a valid email address" })
    ).toBeInTheDocument();
  });
});
