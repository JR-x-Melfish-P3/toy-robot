import type { FC } from 'react'
import type { RobotState } from '../../types/robot'

interface Props {
  state: RobotState | undefined
}

const StatusBar: FC<Props> = ({ state }) => (
  <div role="status" aria-label="robot status" className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
    <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
      Status
    </h2>
    {state ? (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 w-16">Position</span>
          <span className="font-mono text-sm font-semibold text-slate-800">
            X: {state.x} &nbsp; Y: {state.y}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 w-16">Facing</span>
          <span className="font-mono text-sm font-semibold text-emerald-600">
            {state.direction}
          </span>
        </div>
      </div>
    ) : (
      <p className="text-sm text-slate-400 italic">Not placed</p>
    )}
  </div>
)

export default StatusBar
