import type { FC } from "react";
import Cell from "./components/Cell";

interface Props {
  cols: number;
  rows: number;
}

const Board: FC<Props> = ({ cols, rows }) => {
  return (
    <table className="border">
      <tbody>
        {Array.from({ length: rows }).map((_, row) => (
          <tr key={row}>
            {Array.from({ length: cols }).map((_, col) => (
              <td key={col}>
                <Cell x={col} y={row} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
