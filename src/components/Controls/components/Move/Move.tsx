import type { FC } from "react";
import { ArrowUp, RotateCcw, RotateCw } from "lucide-react";

interface Props {
  onMove: () => void;
  onTurnLeft: () => void;
  onTurnRight: () => void;
  disabled?: boolean;
}

const Move: FC<Props> = ({ onMove, onTurnLeft, onTurnRight, disabled = false }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
    <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
      Move Robot
    </h2>
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={onMove}
        disabled={disabled}
        className="bg-slate-800 hover:bg-slate-900 active:bg-black text-white w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ArrowUp size={16} />
        <span className="text-sm font-medium">Move</span>
      </button>
      <div className="flex gap-3 w-full">
        <button
          onClick={onTurnLeft}
          disabled={disabled}
          className="bg-slate-700 hover:bg-slate-800 active:bg-slate-900 text-white flex-1 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RotateCcw size={16} />
          <span className="text-sm font-medium">Turn Left</span>
        </button>
        <button
          onClick={onTurnRight}
          disabled={disabled}
          className="bg-slate-700 hover:bg-slate-800 active:bg-slate-900 text-white flex-1 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-sm font-medium">Turn Right</span>
          <RotateCw size={16} />
        </button>
      </div>
    </div>
  </div>
);

export default Move;
