"use client";

import { Button } from "@/components/ui";
import { CheckboxComponent } from "../checkbox-component";
import { FilterByPrice } from "./filter-by-price";
import { Ingredients } from "@prisma/client";
import { CheckboxGroup } from "../checkbox-group";
import { PRICE_RANGE_MAX, PRICE_RANGE_MIN } from "@/constants/price-range";
import { useStateFilters } from "@/hooks";

interface Props {
  ingredients: Ingredients[];
}

export function FiltersGroup({ ingredients }: Props) {
  const {
    selectOtherFilters,
    selectedIngredints,
    selectedSizes,
    priceRange,
    setSelectedOtherFilters,
    setSelectedIngredient,
    setSelectedSize,
    setPriceRange,
  } = useStateFilters();

  const submitSelectedFilters = () => {
    const selectedFilters = {
      ingredients: selectedIngredints.size
        ? Array.from(selectedIngredints)
        : undefined,
      sizes: selectedSizes.size ? Array.from(selectedSizes) : undefined,
      priceFrom:
        priceRange.from === PRICE_RANGE_MIN ? undefined : priceRange.from,
      priceTo: priceRange.to === PRICE_RANGE_MAX ? undefined : priceRange.to,
      other: Array.from(selectOtherFilters),
    };

    console.log(selectedFilters);
  };

  return (
    <>
      <div className="py-7 space-y-4">
        <CheckboxComponent
          id="pick"
          name="Можно собирать"
          checked={selectOtherFilters.has("pick")}
          onCheckedChange={setSelectedOtherFilters}
        />
        <CheckboxComponent
          id="new"
          name="Новинки"
          checked={selectOtherFilters.has("new")}
          onCheckedChange={setSelectedOtherFilters}
        />
      </div>

      <CheckboxGroup
        title="Размеры"
        selected={selectedSizes}
        onChangeCheckbox={setSelectedSize}
        items={[
          { id: "md", name: "20 см" },
          { id: "lg", name: "30 см" },
          { id: "xl", name: "40 см" },
        ]}
        className="pb-8 space-y-4"
      />

      <FilterByPrice
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        min={0}
        max={1000}
      />

      <CheckboxGroup
        limit={5}
        items={ingredients}
        title="Ингредиенты:"
        selected={selectedIngredints}
        className="py-8 space-y-4"
        onChangeCheckbox={setSelectedIngredient}
        isShowSearchInput={true}
      />

      <Button className="w-full" onClick={submitSelectedFilters}>
        Применить
      </Button>
    </>
  );
}
