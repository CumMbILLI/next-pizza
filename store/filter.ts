import { create } from "zustand";

interface State {
  rangePrice?: { from: number; to: number };
  ingredientsFilter?: number[];
}

export const useFilterStore = create<State>((set) => ({
  rangePrice: undefined,
  ingredientsFilter: undefined,
  setRangePrice: (rangePrice: { from: number; to: number }) =>
    set({ rangePrice }),
  setIngredientsFilter: (ingredientsFilter: number[]) =>
    set({ ingredientsFilter }),
}));
