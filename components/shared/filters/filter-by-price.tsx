"use client";

import { Input, RangeSlider } from "@/components/ui";
import { Title } from "../title";
import { Dispatch, SetStateAction } from "react";

export type PriceRangeType = {
  from: number;
  to: number;
};

interface Props {
  priceRange: PriceRangeType;
  setPriceRange: Dispatch<SetStateAction<PriceRangeType>>;
  min: number;
  max: number;
}

export function FilterByPrice({ priceRange, setPriceRange, min, max }: Props) {
  return (
    <div className="pt-7 pb-14 border-y border-y-neutral-100 space-y-4">
      <Title size="xs">Цена от и до:</Title>

      <div className="flex gap-4">
        <Input
          type="number"
          placeholder={min.toString()}
          min={min}
          max={max}
          value={priceRange.from}
          onChange={(e) =>
            setPriceRange({ ...priceRange, from: Number(e.target.value) })
          }
        />
        <Input
          type="number"
          placeholder={max.toString()}
          min={min}
          max={max}
          value={priceRange.to}
          onChange={(e) =>
            setPriceRange({ ...priceRange, to: Number(e.target.value) })
          }
        />
      </div>

      <RangeSlider
        min={min}
        max={max}
        step={10}
        value={[priceRange.from, priceRange?.to]}
        onValueChange={(e) => setPriceRange({ from: e[0], to: e[1] })}
      />
    </div>
  );
}
