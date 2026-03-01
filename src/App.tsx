import type { FC } from 'react'
import useRobot from './hooks/useRobot'
import Board from './components/Board'
import Controls from './components/Controls'
import StatusBar from './components/StatusBar'

const App: FC = () => {
  const { state, place, move, turnLeft, turnRight } = useRobot()

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-slate-800 mb-8 tracking-tight">
          Toy Robot Simulator
        </h1>
        <div className="flex gap-10 items-start">
          <Board state={state} />
          <div className="flex flex-col gap-4 flex-1">
            <Controls
              onPlace={place}
              onMove={move}
              onTurnLeft={turnLeft}
              onTurnRight={turnRight}
              disabled={!state}
            />
            <StatusBar state={state} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
