import { Size, Variant } from 'components/Button/Button.types'

export const getVariantClass = (variant: Variant) => {
  const map: { [key: string]: string } = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    danger: 'bg-red-500 hover:bg-red-600'
  }

  return map[variant]
}

export const getSizeClass = (size: Size) => {
  const map: { [key: string]: string } = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }

  return map[size]
}
