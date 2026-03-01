import { renderHook, act } from '@testing-library/react'
import useRobot from './useRobot'

describe('useRobot', () => {
  it('starts with state undefined (robot not placed)', () => {
    const { result } = renderHook(() => useRobot())
    expect(result.current.state).toBeUndefined()
  })

  describe('place', () => {
    it('sets state when position is valid', () => {
      const { result } = renderHook(() => useRobot())
      act(() => { result.current.place(2, 3, 'NORTH') })
      expect(result.current.state).toEqual({ x: 2, y: 3, direction: 'NORTH' })
    })

    it('does not update state when position is out of bounds', () => {
      const { result } = renderHook(() => useRobot())
      act(() => { result.current.place(-1, 0, 'NORTH') })
      expect(result.current.state).toBeUndefined()
    })

    it('can re-place an already placed robot', () => {
      const { result } = renderHook(() => useRobot())
      act(() => { result.current.place(1, 1, 'EAST') })
      act(() => { result.current.place(3, 3, 'SOUTH') })
      expect(result.current.state).toEqual({ x: 3, y: 3, direction: 'SOUTH' })
    })
  })

  describe('move', () => {
    it('does nothing when robot is not placed', () => {
      const { result } = renderHook(() => useRobot())
      act(() => { result.current.move() })
      expect(result.current.state).toBeUndefined()
    })

    it('moves one step in the facing direction', () => {
      const { result } = renderHook(() => useRobot())
      act(() => { result.current.place(2, 2, 'NORTH') })
      act(() => { result.current.move() })
      expect(result.current.state).toEqual({ x: 2, y: 3, direction: 'NORTH' })
    })

    it('does not move when the next step would fall off the board', () => {
      const { result } = renderHook(() => useRobot())
      act(() => { result.current.place(0, 4, 'NORTH') })
      act(() => { result.current.move() })
      expect(result.current.state).toEqual({ x: 0, y: 4, direction: 'NORTH' })
    })
  })

  describe('turnLeft', () => {
    it('does nothing when robot is not placed', () => {
      const { result } = renderHook(() => useRobot())
      act(() => { result.current.turnLeft() })
      expect(result.current.state).toBeUndefined()
    })

    it('rotates the robot 90° counter-clockwise', () => {
      const { result } = renderHook(() => useRobot())
      act(() => { result.current.place(2, 2, 'NORTH') })
      act(() => { result.current.turnLeft() })
      expect(result.current.state?.direction).toBe('WEST')
    })
  })

  describe('turnRight', () => {
    it('does nothing when robot is not placed', () => {
      const { result } = renderHook(() => useRobot())
      act(() => { result.current.turnRight() })
      expect(result.current.state).toBeUndefined()
    })

    it('rotates the robot 90° clockwise', () => {
      const { result } = renderHook(() => useRobot())
      act(() => { result.current.place(2, 2, 'NORTH') })
      act(() => { result.current.turnRight() })
      expect(result.current.state?.direction).toBe('EAST')
    })
  })
})
