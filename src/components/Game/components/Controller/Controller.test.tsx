import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Controller from "./Controller";

describe("Controller", () => {
  test("renders controller group", () => {
    render(
      <Controller
        onNewGame={vi.fn()}
        onLeft={vi.fn()}
        onRight={vi.fn()}
        onMove={vi.fn()}
      />
    );

    expect(
      screen.getByRole("group", { name: "Controller" })
    ).toBeInTheDocument();
  });

  test('renders "New Game" button', async () => {
    // let called = false;
    // const onNewGame = () => {
    //   called = true;
    // }

    const onNewGame = vi.fn();
    const user = userEvent.setup();

    render(
      <Controller
        onNewGame={onNewGame}
        onLeft={vi.fn()}
        onRight={vi.fn()}
        onMove={vi.fn()}
      />
    );

    await user.click(screen.getByRole("button", { name: "New Game" }));

    expect(onNewGame).toHaveBeenCalled();
  });

  test('renders "Left" button', async () => {
    const onLeft = vi.fn();
    const user = userEvent.setup();

    render(
      <Controller
        onNewGame={vi.fn()}
        onLeft={onLeft}
        onRight={vi.fn()}
        onMove={vi.fn()}
      />
    );

    await user.click(screen.getByRole("button", { name: "Left" }));

    expect(onLeft).toHaveBeenCalled();
  });

  test('renders "Right" button', async () => {
    const onRight = vi.fn();
    const user = userEvent.setup();

    render(
      <Controller
        onNewGame={vi.fn()}
        onLeft={vi.fn()}
        onRight={onRight}
        onMove={vi.fn()}
      />
    );

    await user.click(screen.getByRole("button", { name: "Right" }));

    expect(onRight).toHaveBeenCalled();
  });

  test('renders "Move" button', async () => {
    const onMove = vi.fn();
    const user = userEvent.setup();

    render(
      <Controller
        onNewGame={vi.fn()}
        onLeft={vi.fn()}
        onRight={vi.fn()}
        onMove={onMove}
      />
    );

    await user.click(screen.getByRole("button", { name: "Move" }));

    expect(onMove).toHaveBeenCalled();
  });
});
