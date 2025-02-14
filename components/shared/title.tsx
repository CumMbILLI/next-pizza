import clsx from "clsx";
import React, { ReactNode } from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
  size?: TitleSize;
  className?: string;
  children: ReactNode;
}

export const Title = ({ children, size = "sm", className }: Props) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  } as const;

  const mapClassNameBySize = {
    xs: "text-[16px]",
    sm: "text-[22px]",
    md: "text-[26px]",
    lg: "text-[32px]",
    xl: "text-[40px]",
    "2xl": "text-[48px]",
  } as const;

  return React.createElement(
    mapTagBySize[size],
    { className: clsx("font-bold", mapClassNameBySize[size], className) },
    children
  );
};
