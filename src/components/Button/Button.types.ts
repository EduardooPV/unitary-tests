import { ButtonHTMLAttributes } from 'react'

export type Variant = 'primary' | 'secondary' | 'danger'

export type Size = 'small' | 'medium' | 'large' 

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  testId?: string;
  onClick?: () => void
}
