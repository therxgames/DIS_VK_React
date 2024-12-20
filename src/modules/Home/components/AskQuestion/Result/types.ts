import { ReactNode } from "react";

export interface ResultProps {
  success: boolean;
}

export interface ResultContentProps {
  title: string;
  subtitle: string;
  imgSrc: string;
  children?: ReactNode;
}