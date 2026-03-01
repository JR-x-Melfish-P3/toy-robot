import type { FC } from "react";
import { BOARD_SIZE } from "../../../../utils/robot";
import Cell from "../Cell";

const Grid: FC = () => (
  <div>
    <div className="grid grid-cols-5">
      {Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, i) => (
        <div key={i}>
          <Cell />
        </div>
      ))}
    </div>
  </div>
);

export default Grid;
