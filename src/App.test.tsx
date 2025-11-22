import { render, screen, within } from "@testing-library/react";
import App, { COLS, ROWS } from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  test("renders board", () => {
    render(<App />);

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(ROWS);
    expect(screen.getAllByRole("cell")).toHaveLength(ROWS * COLS);
  });

  test("renders Robot", () => {
    render(<App />);

    expect(screen.getByRole("region", { name: "Robot" })).toBeInTheDocument();
  });

  test("renders New Game button", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: "New Game" })
    ).toBeInTheDocument();
  });

  test("renders Controller", () => {
    render(<App />);

    expect(
      screen.getByRole("group", { name: "Controller" })
    ).toBeInTheDocument();
  });

  test("plays a simple game", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: "Right" }));
    await user.click(screen.getByRole("button", { name: "Move" }));

    expect(
      within(screen.getByRole("region", { name: "Robot" })).getByRole(
        "region",
        { name: "Placeholder" }
      )
    ).toHaveAccessibleDescription("X: 1, Y: 0, Facing: 1");

    await user.click(screen.getByRole("button", { name: "Left" }));

    expect(
      within(screen.getByRole("region", { name: "Robot" })).getByRole(
        "region",
        { name: "Placeholder" }
      )
    ).toHaveAccessibleDescription("X: 1, Y: 0, Facing: 0");
  });

  test("restarts a new game", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: "Right" }));

    expect(
      within(screen.getByRole("region", { name: "Robot" })).getByRole(
        "region",
        { name: "Placeholder" }
      )
    ).toHaveAccessibleDescription("X: 0, Y: 0, Facing: 1");

    await user.click(screen.getByRole("button", { name: "New Game" }));

    expect(
      within(screen.getByRole("region", { name: "Robot" })).getByRole(
        "region",
        { name: "Placeholder" }
      )
    ).toHaveAccessibleDescription("X: 0, Y: 0, Facing: 0");
  });
});
