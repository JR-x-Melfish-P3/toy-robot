import { render, screen } from '@testing-library/react'
import StatusBar from './StatusBar'

describe('StatusBar', () => {
  it('shows not placed message when state is undefined', () => {
    render(<StatusBar state={undefined} />)
    expect(screen.getByText('Not placed')).toBeInTheDocument()
  })

  it('shows position and direction when robot is placed', () => {
    render(<StatusBar state={{ x: 2, y: 3, direction: 'NORTH' }} />)
    expect(screen.getByText(/X: 2/)).toBeInTheDocument()
    expect(screen.getByText(/Y: 3/)).toBeInTheDocument()
    expect(screen.getByText('NORTH')).toBeInTheDocument()
  })

  it('updates when state changes', () => {
    const { rerender } = render(<StatusBar state={undefined} />)
    expect(screen.getByText('Not placed')).toBeInTheDocument()

    rerender(<StatusBar state={{ x: 1, y: 4, direction: 'WEST' }} />)
    expect(screen.queryByText('Not placed')).not.toBeInTheDocument()
    expect(screen.getByText('WEST')).toBeInTheDocument()
  })
})
