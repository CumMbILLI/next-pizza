"use client";

import { ReactNode } from "react";
import { Checkbox } from "../ui";

export interface CheckboxComponentProps {
  id: number | string;
  value?: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (value: number | string) => void;
  checked?: boolean;
  name: string;
}

export function CheckboxComponent({
  id,
  checked,
  value,
  name,
  endAdornment,
  onCheckedChange,
}: CheckboxComponentProps) {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        onCheckedChange={() => onCheckedChange?.(String(id))}
        id={`checkbox-${id}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${id}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {name}
      </label>

      {endAdornment}
    </div>
  );
}
