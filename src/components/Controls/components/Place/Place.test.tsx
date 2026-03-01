import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Place from "./Place";

describe("Place", () => {
  it("calls place with default values (0, 0, NORTH) on submit", async () => {
    const place = vi.fn();
    const user = userEvent.setup();
    render(<Place onPlace={place} />);
    await user.click(screen.getByRole("button", { name: /place/i }));
    expect(place).toHaveBeenCalledWith(0, 0, "NORTH");
  });

  it("calls place with entered values on submit", async () => {
    const place = vi.fn();
    const user = userEvent.setup();
    render(<Place onPlace={place} />);

    await user.clear(screen.getByLabelText("X"));
    await user.type(screen.getByLabelText("X"), "2");
    await user.clear(screen.getByLabelText("Y"));
    await user.type(screen.getByLabelText("Y"), "3");
    await user.selectOptions(screen.getByLabelText("Direction"), "EAST");
    await user.click(screen.getByRole("button", { name: /place/i }));

    expect(place).toHaveBeenCalledWith(2, 3, "EAST");
  });

  it("does not call place when values are out of range", async () => {
    const place = vi.fn();
    const user = userEvent.setup();
    render(<Place onPlace={place} />);

    await user.clear(screen.getByLabelText("X"));
    await user.type(screen.getByLabelText("X"), "9");
    await user.click(screen.getByRole("button", { name: /place/i }));

    expect(place).not.toHaveBeenCalled();
  });
});
