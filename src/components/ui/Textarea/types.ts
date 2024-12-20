import { ReactNode } from "react";

export interface TextareaProps {
  className?: string;
  errorText?: string;
  value: string;
  title: string;
  maxLength: number;
}