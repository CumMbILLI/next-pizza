"use client";

import { ReactNode } from "react";
import { Checkbox } from "../ui";

export interface FilterCheckboxProps {
  text?: string;
  value: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

type Props = FilterCheckboxProps;

export function FilterCheckbox({
  name,
  checked,
  value,
  text,
  endAdornment,
  onCheckedChange,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        name={name}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        onCheckedChange={onCheckedChange}
        id={`checkbox-${name}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${name}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>

      {endAdornment}
    </div>
  );
}
