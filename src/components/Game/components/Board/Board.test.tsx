import { render, screen, within } from "@testing-library/react";
import Board from "./Board";

describe("Board", () => {
  test("renders board table", () => {
    const row = 2;
    const cols = 2;

    render(<Board cols={cols} rows={row} />);

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(row);
    expect(screen.getAllByRole("cell")).toHaveLength(cols * row);

    expect(screen.getAllByRole("region", { name: "Placeholder" })).toHaveLength(
      cols * row
    );

    expect(
      within(screen.getAllByRole("cell")[0]).getByRole("region", {
        name: "Placeholder",
      })
    ).toHaveAccessibleDescription("X: 0, Y: 0, Facing: 0");
  });
});
