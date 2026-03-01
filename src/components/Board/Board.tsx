import type { FC } from 'react'
import type { RobotState } from '../../types/robot'
import YAxis from './components/YAxis'
import Grid from './components/Grid'
import XAxis from './components/XAxis'
import Robot from './components/Robot'

interface Props {
  state: RobotState | undefined
}

const Board: FC<Props> = ({ state }) => (
  <div className="relative pl-6 pb-6">
    <div className="absolute left-0 top-0">
      <YAxis />
    </div>
    <div className="relative">
      <Grid />
      {state && <Robot x={state.x} y={state.y} direction={state.direction} />}
    </div>
    <div className="absolute bottom-0 left-6">
      <XAxis />
    </div>
  </div>
)

export default Board
