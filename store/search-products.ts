import { create } from "zustand";

interface State {
  value: string;
  focused: boolean;
  setValue: (searchValue: string) => void;
  setFocused: (focus: boolean) => void;
  resetSearch: VoidFunction;
}

export const useSearchProductsStore = create<State>()((set) => ({
  value: "",
  focused: false,
  setValue: (value: string) => set({ value }),
  setFocused: (focused: boolean) => set({ focused }),
  resetSearch: () => set({ value: "", focused: false }),
}));
