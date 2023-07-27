import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import Button from '.'

describe('<Button />', () => {
  it('should render button component', () => {
    render(<Button data-testid="buttonTesting">Testing</Button>)

    const button = screen.getByTestId('buttonTesting')

    expect(button).toBeInTheDocument()
  })

  it('should call to function in on click', () => {
    const onClickMock = jest.fn()
    render(
      <Button data-testid="buttonTesting" onClick={onClickMock}>
        Testing
      </Button>
    )

    const button = screen.getByTestId('buttonTesting')

    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('should render button with variant primary', () => {
    render(
      <Button data-testid="buttonTesting" variant="primary">
        Testing
      </Button>
    )

    const button = screen.getByTestId('buttonTesting')

    expect(button).toHaveClass('bg-blue-500 hover:bg-blue-600')
  })

  it('should render button with variant secondary', () => {
    render(
      <Button data-testid="buttonTesting" variant="secondary">
        Testing
      </Button>
    )

    const button = screen.getByTestId('buttonTesting')

    expect(button).toHaveClass('bg-gray-500 hover:bg-gray-600')
  })

  it('should render button with variant danger', () => {
    render(
      <Button data-testid="buttonTesting" variant="danger">
        Testing
      </Button>
    )

    const button = screen.getByTestId('buttonTesting')

    expect(button).toHaveClass('bg-red-500 hover:bg-red-600')
  })

  it('should render button with size small', () => {
    render(
      <Button data-testid="buttonTesting" size="small">
        Testing
      </Button>
    )

    const button = screen.getByTestId('buttonTesting')

    expect(button).toHaveClass('px-2 py-1 text-sm')
  })

  it('should render button with size medium', () => {
    render(
      <Button data-testid="buttonTesting" size="medium">
        Testing
      </Button>
    )

    const button = screen.getByTestId('buttonTesting')

    expect(button).toHaveClass('px-4 py-2 text-base')
  })

  it('should render button with size large', () => {
    render(
      <Button data-testid="buttonTesting" size="large">
        Testing
      </Button>
    )

    const button = screen.getByTestId('buttonTesting')

    expect(button).toHaveClass('px-6 py-3 text-lg')
  })
})
