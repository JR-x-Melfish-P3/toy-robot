type Direction = "left" | "right";

const END: Record<Direction, number> = {
  left: 3,
  right: 1,
};

const turn = (direction: Direction, value: number) =>
  (value + END[direction]) % 4;

export default turn;
