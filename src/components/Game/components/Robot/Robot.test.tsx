import { render, screen, within } from "@testing-library/react";
import Robot from "./Robot";

describe("Robot", () => {
  test("places bot at given position", () => {
    render(<Robot x={2} y={3} facing={1} />);

    expect(screen.getByRole("region", { name: "Robot" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Robot" })).toBeInTheDocument();

    expect(
      within(screen.getByRole("region", { name: "Robot" })).getByRole(
        "region",
        { name: "Placeholder" }
      )
    ).toHaveAccessibleDescription("X: 2, Y: 3, Facing: 1");
  });
});
