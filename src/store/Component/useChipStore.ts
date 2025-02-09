import { create } from "zustand";

interface IChipStore {
  selectedChips: number[];
  toggleChip: (index: number) => void;
}

const useChipStore = create<IChipStore>((set) => ({
  selectedChips: [0],
  toggleChip: (index) =>
    set((state) => {
      if (index === 0) return { selectedChips: [0] };
      if (state.selectedChips.includes(0)) return { selectedChips: [index] };

      if (state.selectedChips.includes(index)) {
        return {
          selectedChips: state.selectedChips.filter((i) => i !== index),
        };
      }
      return { selectedChips: [...state.selectedChips, index] };
    }),
}));

export default useChipStore;
