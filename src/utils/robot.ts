import type { Direction, RobotState } from '../types/robot'

export const BOARD_SIZE = 5

export const isValidPosition = (x: number, y: number): boolean =>
  x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE

const ROTATE_LEFT: Record<Direction, Direction> = {
  NORTH: 'WEST',
  WEST: 'SOUTH',
  SOUTH: 'EAST',
  EAST: 'NORTH',
}

const ROTATE_RIGHT: Record<Direction, Direction> = {
  NORTH: 'EAST',
  EAST: 'SOUTH',
  SOUTH: 'WEST',
  WEST: 'NORTH',
}

export const rotateLeft = (direction: Direction): Direction =>
  ROTATE_LEFT[direction]

export const rotateRight = (direction: Direction): Direction =>
  ROTATE_RIGHT[direction]

export const getNextPosition = (
  x: number,
  y: number,
  direction: Direction,
): { x: number; y: number } => {
  switch (direction) {
    case 'NORTH':
      return { x, y: y + 1 }
    case 'SOUTH':
      return { x, y: y - 1 }
    case 'EAST':
      return { x: x + 1, y }
    case 'WEST':
      return { x: x - 1, y }
  }
}

export const placeRobot = (
  x: number,
  y: number,
  direction: Direction,
): RobotState | null => {
  if (!isValidPosition(x, y)) return null
  return { x, y, direction }
}

export const moveRobot = (state: RobotState): RobotState => {
  const next = getNextPosition(state.x, state.y, state.direction)
  if (!isValidPosition(next.x, next.y)) return state
  return { ...state, ...next }
}
