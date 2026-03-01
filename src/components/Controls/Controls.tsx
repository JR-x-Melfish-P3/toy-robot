import type { FC } from 'react'
import type { Direction } from '../../types/robot'
import Place from './components/Place'
import Move from './components/Move'

interface Props {
  onPlace: (x: number, y: number, direction: Direction) => void
  onMove: () => void
  onTurnLeft: () => void
  onTurnRight: () => void
  disabled: boolean
}

const Controls: FC<Props> = ({ onPlace, onMove, onTurnLeft, onTurnRight, disabled }) => (
  <div className="flex flex-col gap-4">
    <Place onPlace={onPlace} />
    <Move onMove={onMove} onTurnLeft={onTurnLeft} onTurnRight={onTurnRight} disabled={disabled} />
  </div>
)

export default Controls
