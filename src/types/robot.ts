export type Direction = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST'

export interface RobotState {
  x: number
  y: number
  direction: Direction
}
