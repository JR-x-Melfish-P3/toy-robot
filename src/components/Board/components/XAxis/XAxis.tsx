import type { FC } from 'react'
import { BOARD_SIZE } from '../../../../utils/robot'

const XAxis: FC = () => (
  <div className="flex ml-6">
    {Array.from({ length: BOARD_SIZE }, (_, x) => (
      <div
        key={x}
        className="w-16 flex items-center justify-center text-xs text-slate-400 font-mono"
      >
        {x}
      </div>
    ))}
  </div>
)

export default XAxis
