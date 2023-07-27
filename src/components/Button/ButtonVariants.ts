import { tv } from 'tailwind-variants'

export const button = tv({
  base: 'text-white rounded border-2',
  variants: {
    variant: {
      primary: 'bg-blue-500 border-blue-500 hover:bg-blue-600',
      secondary: 'bg-gray-500 border-gray-500 hover:bg-gray-600',
      danger: 'bg-red-500 border-red-500 hover:bg-red-600'
    },
    size: {
      small: 'px-2 py-1 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg'
    }
  }
})
