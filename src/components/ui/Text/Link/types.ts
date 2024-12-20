import { ReactNode, AnchorHTMLAttributes } from "react";
import { link } from './Link';
import { type VariantProps } from 'class-variance-authority'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof link> {
  children: ReactNode;
  className?: string;
}