import { render, screen } from "@testing-library/react";
import Placeholder, { SIZE } from "./Placeholder";

describe("Placeholder", () => {
  test("passes native attributes to the div element", () => {
    render(
      <Placeholder x={0} y={0} className="px-4">
        <div>Hello world</div>
      </Placeholder>
    );

    expect(screen.getByRole("region", { name: "Placeholder" })).toHaveClass(
      "px-4"
    );
  });

  test("applies styles", () => {
    render(<Placeholder x={1} y={2} facing={1} />);

    expect(
      screen.getByRole("region", { name: "Placeholder" })
    ).toHaveAccessibleDescription("X: 1, Y: 2, Facing: 1");

    expect(screen.getByRole("region", { name: "Placeholder" })).toHaveStyle({
      height: `${SIZE}px`,
      width: `${SIZE}px`,
      transform: `rotate(90deg)`,
      position: "absolute",
      left: `${1 * SIZE}px`,
      top: `${2 * SIZE}px`,
    });
  });

  test("applies static position", () => {
    render(<Placeholder x={0} y={0} isStatic />);

    expect(screen.getByRole("region", { name: "Placeholder" })).toHaveStyle({
      position: "static",
    });
  });
});
