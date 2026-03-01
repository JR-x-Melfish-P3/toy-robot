import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Move from "./Move";

const noop = (): void => {};

describe("Move", () => {
  it("disables all buttons when is disabled", () => {
    render(
      <Move onMove={noop} onTurnLeft={noop} onTurnRight={noop} disabled />,
    );
    expect(screen.getByRole("button", { name: /move/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /turn left/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /turn right/i })).toBeDisabled();
  });

  it("enables all buttons when is not disabled", () => {
    render(<Move onMove={noop} onTurnLeft={noop} onTurnRight={noop} />);
    expect(screen.getByRole("button", { name: /move/i })).not.toBeDisabled();
    expect(
      screen.getByRole("button", { name: /turn left/i }),
    ).not.toBeDisabled();
    expect(
      screen.getByRole("button", { name: /turn right/i }),
    ).not.toBeDisabled();
  });

  it("calls move when Move button is clicked", async () => {
    const move = vi.fn();
    const user = userEvent.setup();
    render(
      <Move
        onMove={move}
        onTurnLeft={noop}
        onTurnRight={noop}
        disabled={false}
      />,
    );
    await user.click(screen.getByRole("button", { name: /move/i }));
    expect(move).toHaveBeenCalledOnce();
  });

  it("calls turnLeft when Turn Left button is clicked", async () => {
    const turnLeft = vi.fn();
    const user = userEvent.setup();
    render(
      <Move
        onMove={noop}
        onTurnLeft={turnLeft}
        onTurnRight={noop}
        disabled={false}
      />,
    );
    await user.click(screen.getByRole("button", { name: /turn left/i }));
    expect(turnLeft).toHaveBeenCalledOnce();
  });

  it("calls turnRight when Turn Right button is clicked", async () => {
    const turnRight = vi.fn();
    const user = userEvent.setup();
    render(
      <Move
        onMove={noop}
        onTurnLeft={noop}
        onTurnRight={turnRight}
        disabled={false}
      />,
    );
    await user.click(screen.getByRole("button", { name: /turn right/i }));
    expect(turnRight).toHaveBeenCalledOnce();
  });
});
