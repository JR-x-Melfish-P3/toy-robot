import type { FC } from "react";
import Cell from "./components/Cell";

const Board: FC = () => {
  return (
    <table className="border">
      <tbody>
        {Array.from({ length: 5 }).map((_, row) => (
          <tr key={row}>
            {Array.from({ length: 5 }).map((_, col) => (
              <td key={col}>
                <Cell />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
