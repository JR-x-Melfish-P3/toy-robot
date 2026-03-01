import {
  BOARD_SIZE,
  isValidPosition,
  rotateLeft,
  rotateRight,
  getNextPosition,
  placeRobot,
  moveRobot,
} from './robot'

describe('BOARD_SIZE', () => {
  it('is 5', () => {
    expect(BOARD_SIZE).toBe(5)
  })
})

describe('isValidPosition', () => {
  it('returns true for valid positions within the board', () => {
    expect(isValidPosition(0, 0)).toBe(true)
    expect(isValidPosition(4, 4)).toBe(true)
    expect(isValidPosition(2, 3)).toBe(true)
  })

  it('returns false for negative coordinates', () => {
    expect(isValidPosition(-1, 0)).toBe(false)
    expect(isValidPosition(0, -1)).toBe(false)
  })

  it('returns false for coordinates beyond the board', () => {
    expect(isValidPosition(5, 0)).toBe(false)
    expect(isValidPosition(0, 5)).toBe(false)
  })
})

describe('rotateLeft', () => {
  it('cycles NORTH → WEST → SOUTH → EAST → NORTH', () => {
    expect(rotateLeft('NORTH')).toBe('WEST')
    expect(rotateLeft('WEST')).toBe('SOUTH')
    expect(rotateLeft('SOUTH')).toBe('EAST')
    expect(rotateLeft('EAST')).toBe('NORTH')
  })
})

describe('rotateRight', () => {
  it('cycles NORTH → EAST → SOUTH → WEST → NORTH', () => {
    expect(rotateRight('NORTH')).toBe('EAST')
    expect(rotateRight('EAST')).toBe('SOUTH')
    expect(rotateRight('SOUTH')).toBe('WEST')
    expect(rotateRight('WEST')).toBe('NORTH')
  })
})

describe('getNextPosition', () => {
  it('increments y when facing NORTH', () => {
    expect(getNextPosition(2, 2, 'NORTH')).toEqual({ x: 2, y: 3 })
  })

  it('decrements y when facing SOUTH', () => {
    expect(getNextPosition(2, 2, 'SOUTH')).toEqual({ x: 2, y: 1 })
  })

  it('increments x when facing EAST', () => {
    expect(getNextPosition(2, 2, 'EAST')).toEqual({ x: 3, y: 2 })
  })

  it('decrements x when facing WEST', () => {
    expect(getNextPosition(2, 2, 'WEST')).toEqual({ x: 1, y: 2 })
  })
})

describe('placeRobot', () => {
  it('returns a RobotState for a valid position', () => {
    expect(placeRobot(0, 0, 'NORTH')).toEqual({ x: 0, y: 0, direction: 'NORTH' })
    expect(placeRobot(4, 4, 'SOUTH')).toEqual({ x: 4, y: 4, direction: 'SOUTH' })
  })

  it('returns null for an out-of-bounds position', () => {
    expect(placeRobot(-1, 0, 'NORTH')).toBeNull()
    expect(placeRobot(0, 5, 'EAST')).toBeNull()
  })
})

describe('moveRobot', () => {
  it('moves one step in the facing direction', () => {
    expect(moveRobot({ x: 2, y: 2, direction: 'NORTH' })).toEqual({ x: 2, y: 3, direction: 'NORTH' })
    expect(moveRobot({ x: 2, y: 2, direction: 'SOUTH' })).toEqual({ x: 2, y: 1, direction: 'SOUTH' })
    expect(moveRobot({ x: 2, y: 2, direction: 'EAST' })).toEqual({ x: 3, y: 2, direction: 'EAST' })
    expect(moveRobot({ x: 2, y: 2, direction: 'WEST' })).toEqual({ x: 1, y: 2, direction: 'WEST' })
  })

  it('does not move when the next position would fall off the board', () => {
    expect(moveRobot({ x: 0, y: 0, direction: 'SOUTH' })).toEqual({ x: 0, y: 0, direction: 'SOUTH' })
    expect(moveRobot({ x: 0, y: 0, direction: 'WEST' })).toEqual({ x: 0, y: 0, direction: 'WEST' })
    expect(moveRobot({ x: 4, y: 4, direction: 'NORTH' })).toEqual({ x: 4, y: 4, direction: 'NORTH' })
    expect(moveRobot({ x: 4, y: 4, direction: 'EAST' })).toEqual({ x: 4, y: 4, direction: 'EAST' })
  })
})
