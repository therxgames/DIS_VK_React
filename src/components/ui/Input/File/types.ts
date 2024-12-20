import { ReactNode } from "react";
import { ChangeEvent, useEffect } from "react";

export interface FileProps {
  errorText?: string;
  className?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}