import { PRICE_RANGE_MAX, PRICE_RANGE_MIN } from "@/constants/price-range";
import { PriceRangeType } from "@/types/price-range.type";
import { Dispatch, SetStateAction, useState } from "react";
import { useSet } from "react-use";

interface StateFilters {
  selectOtherFilters: Set<string | number>;
  selectedIngredints: Set<string | number>;
  selectedSizes: Set<string | number>;
  priceRange: PriceRangeType;
}

interface ReturnProps extends StateFilters {
  setSelectedOtherFilters: (value: string | number) => void;
  setSelectedIngredient: (value: string | number) => void;
  setSelectedSize: (value: string | number) => void;
  setPriceRange: Dispatch<SetStateAction<PriceRangeType>>;
}

export const useStateFilters = (): ReturnProps => {
  //Other Filter
  const [selectOtherFilters, { toggle: toggleSelectOtherFilters }] = useSet<
    string | number
  >(new Set<string>(new Set<string>()));

  //Ingredients Filter
  const [selectedIngredints, { toggle: toggleSelectIngredient }] = useSet<
    number | string
  >(new Set<string>());

  //Size Filter
  const [selectedSizes, { toggle: toggleSelectSize }] = useSet<string | number>(
    new Set<string>()
  );

  //Price range Filter
  const [priceRange, setPriceRange] = useState<PriceRangeType>({
    from: PRICE_RANGE_MIN,
    to: PRICE_RANGE_MAX,
  });

  return {
    selectOtherFilters,
    selectedIngredints,
    selectedSizes,
    priceRange,
    setSelectedOtherFilters: toggleSelectOtherFilters,
    setSelectedIngredient: toggleSelectIngredient,
    setSelectedSize: toggleSelectSize,
    setPriceRange,
  };
};
