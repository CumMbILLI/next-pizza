import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "mx-auto 2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px]",
        className
      )}
    >
      {children}
    </div>
  );
};
