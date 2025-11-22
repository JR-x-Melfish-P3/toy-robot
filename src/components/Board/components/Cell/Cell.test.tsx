import { render, screen } from "@testing-library/react";
import Cell from "./Cell";

describe("Cell", () => {
  test("renders static bordered Placeholder", () => {
    render(<Cell x={1} y={2} />);

    expect(
      screen.getByRole("region", { name: "Placeholder" })
    ).toHaveAccessibleDescription("X: 1, Y: 2, Facing: 0");

    expect(screen.getByRole("region", { name: "Placeholder" })).toHaveStyle({
      position: "static",
    });

    expect(screen.getByRole("region", { name: "Placeholder" })).toHaveClass(
      "border"
    );
  });
});
