import React, { FC, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  onClick,
  children,
  ...rest
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-600'
      case 'secondary':
        return 'bg-gray-500 hover:bg-gray-600'
      case 'danger':
        return 'bg-red-500 hover:bg-red-600'
      default:
        return 'bg-blue-500 hover:bg-blue-600'
    }
  }

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'px-2 py-1 text-sm'
      case 'medium':
        return 'px-4 py-2 text-base'
      case 'large':
        return 'px-6 py-3 text-lg'
      default:
        return 'px-4 py-2 text-base'
    }
  }

  return (
    <button
      onClick={onClick}
      className={`text-white rounded ${getVariantClass()} ${getSizeClass()}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
