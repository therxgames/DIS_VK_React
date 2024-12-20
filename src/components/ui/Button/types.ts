import { ButtonHTMLAttributes } from 'react';
import { button } from './Button';
import { type VariantProps } from 'class-variance-authority'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  onClick?: () => void;
}