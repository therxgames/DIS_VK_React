import { ReactNode } from "react";

export interface TextProps {
  title: string;
  errorText?: string;
  className?: string;
  value: string;
  children?: ReactNode;
}