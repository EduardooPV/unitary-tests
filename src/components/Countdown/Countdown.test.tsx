import '@testing-library/dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Countdown from '.'

describe('<Countdown />', () => {
  it('should render countdown', () => {
    render(<Countdown />)

    const countdown = screen.getByTestId('countdownTest')

    expect(countdown).toBeInTheDocument()
  })

  it('should render count result with value zero', () => {
    render(<Countdown />)

    const countResult = screen.getByTestId('countResult')

    expect(countResult).toHaveTextContent('0')
  })

  it('should add more one when clicked in button add', () => {
    render(<Countdown />)

    const incrementButton = screen.getByTestId('incrementButton')
    const countResult = screen.getByTestId('countResult')

    fireEvent.click(incrementButton)
    expect(countResult).toHaveTextContent('1')
  })

  it('should remove more one when clicked in button remove', () => {
    render(<Countdown />)

    const decrementButton = screen.getByTestId('decrementButton')
    const incrementButton = screen.getByTestId('incrementButton')
    const countResult = screen.getByTestId('countResult')

    fireEvent.click(incrementButton)
    expect(countResult).toHaveTextContent('1')

    fireEvent.click(decrementButton)
    expect(countResult).toHaveTextContent('0')
  })

  it('should counter value cannot be less than zero', () => {
    render(<Countdown />)

    const decrementButton = screen.getByTestId('decrementButton')
    const countResult = screen.getByTestId('countResult')

    fireEvent.click(decrementButton)
    expect(countResult).toHaveTextContent('0')
  })

  it('should disabled button decrement if value to equal zero', () => {
    render(<Countdown />)

    const decrementButton = screen.getByTestId('decrementButton')

    expect(decrementButton).toHaveAttribute('disabled')
  })

  it('should remove disabled button decrement if value to greater than zero', () => {
    render(<Countdown />)

    const decrementButton = screen.getByTestId('decrementButton')
    const incrementButton = screen.getByTestId('incrementButton')

    expect(decrementButton).toHaveAttribute('disabled')

    fireEvent.click(incrementButton)
    expect(decrementButton).not.toHaveAttribute('disabled')
  })

  it('should change background color decrement button if value to greater than zero', () => {
    render(<Countdown />)

    const decrementButton = screen.getByTestId('decrementButton')

    expect(decrementButton).toHaveClass(
      'bg-transparent  border-red-500 hover:bg-transparent'
    )
  })
})
