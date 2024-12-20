import { ReactNode } from "react";
import { card } from './Card';
import { type VariantProps } from 'class-variance-authority';

export interface CardProps extends VariantProps<typeof card> {
  children: ReactNode;
  counter: string;
  icon: 'ears' | 'cube' | 'rect' | 'circle' | 'flower';
}