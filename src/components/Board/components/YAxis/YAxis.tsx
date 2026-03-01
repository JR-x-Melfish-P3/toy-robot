import type { FC } from 'react'
import { BOARD_SIZE } from '../../../../utils/robot'

const YAxis: FC = () => (
  <div className="flex flex-col">
    {Array.from({ length: BOARD_SIZE }, (_, rowIndex) => (
      <div
        key={rowIndex}
        className="w-4 h-16 flex items-center justify-center text-xs text-slate-400 font-mono"
      >
        {BOARD_SIZE - 1 - rowIndex}
      </div>
    ))}
  </div>
)

export default YAxis
