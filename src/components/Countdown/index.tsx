import { FC, useState } from 'react'
import Button from 'components/Button'

const Countdown: FC = () => {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const removeCount = () => {
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1)
    }
  }

  return (
    <article
      data-testid="countdownTest"
      className="flex items-center justify-center gap-10 pt-10"
    >
      <Button
        testId="decrementButton"
        variant="danger"
        onClick={() => removeCount()}
        className={`${
          count === 0
            ? 'bg-transparent  border-red-500 hover:bg-transparent'
            : ''
        }`}
        disabled={count === 0 ? true : false}
      >
        Remove -
      </Button>

      <p data-testid="countResult">{count}</p>

      <Button testId="incrementButton" onClick={() => addCount()}>
        Add +
      </Button>
    </article>
  )
}

export default Countdown
