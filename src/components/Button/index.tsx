import { ButtonProps } from 'components/Button/Button.types'
import React, { FC } from 'react'
import { getSizeClass, getVariantClass } from './stylesMap'

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  testId,
  onClick,
  children,
  ...rest
}) => {
  return (
    <button
      data-testid={testId}
      onClick={onClick}
      className={`text-white rounded
         ${getVariantClass(variant)} 
         ${getSizeClass(size)}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
