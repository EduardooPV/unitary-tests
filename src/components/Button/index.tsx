import { ButtonProps } from 'components/Button/Button.types'
import React, { FC } from 'react'
import { button } from './ButtonVariants'

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className,
  testId,
  onClick,
  children,
  ...rest
}) => {
  return (
    <button
      data-testid={testId}
      onClick={onClick}
      className={button({ variant, size, className })}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
