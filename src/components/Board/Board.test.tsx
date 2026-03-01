import { render, screen } from '@testing-library/react'
import Board from './Board'

describe('Board', () => {
  it('does not render robot when state is undefined', () => {
    render(<Board state={undefined} />)
    expect(screen.queryByRole('img', { name: 'robot' })).not.toBeInTheDocument()
  })

  it('renders robot when state is defined', () => {
    render(<Board state={{ x: 2, y: 2, direction: 'NORTH' }} />)
    expect(screen.getByRole('img', { name: 'robot' })).toBeInTheDocument()
  })

  it('renders axis labels for both axes', () => {
    render(<Board state={undefined} />)
    // Each label 0-4 appears once in Y axis and once in X axis
    expect(screen.getAllByText('0')).toHaveLength(2)
    expect(screen.getAllByText('4')).toHaveLength(2)
  })
})
