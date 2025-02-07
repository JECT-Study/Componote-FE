import { create } from "zustand";

interface IChipStore {
  selectedChip: number[];
  toggleChip: (index: number) => void;
}

const useChipStore = create<IChipStore>((set) => ({
  selectedChip: [],
  toggleChip: (index) =>
    set((state) => {
      if (!state.selectedChip.includes(index)) return { selectedChip: [index] };
      return state;
    }),
}));

export default useChipStore;
