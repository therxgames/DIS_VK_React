import { tw } from "typewind";
import { cx } from "class-variance-authority";
import { CardsRowProps } from "./types";

export const CardsRow = ({
  children,
  columns,
  className = "",
}: CardsRowProps) => {
  const gridColsClass: string = `grid-cols-${columns}`;

  return (
    <div className={cx(tw.grid.gap_10, gridColsClass, className)}>
      {children}
    </div>
  );
};
