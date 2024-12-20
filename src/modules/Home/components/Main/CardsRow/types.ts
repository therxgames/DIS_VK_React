import { ReactNode } from "react";

export interface CardsRowProps {
  children: ReactNode;
  columns: string;
  className?: string;
}