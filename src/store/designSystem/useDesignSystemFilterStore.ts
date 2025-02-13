import { DesignSystemFilter } from "@/types/enum/designSystemFilters";
import { create } from "zustand";

interface IDesignSystemFilterState {
  selectedFilters: DesignSystemFilter[];
}

interface IDesignSystemFilterAction {
  toggleFilterChip: (filter: DesignSystemFilter) => void;
  // TODO: reset 기능 추가
  // resetChips: () => void;
}

const useDesignSystemFilterStore = create<
  IDesignSystemFilterState & IDesignSystemFilterAction
>((set) => ({
  selectedFilters: [],
  toggleFilterChip: (filter: DesignSystemFilter) =>
    set((state) => {
      if (state.selectedFilters.includes(filter))
        return {
          selectedFilters: state.selectedFilters.filter(
            (val) => val !== filter,
          ),
        };

      return { selectedFilters: [...state.selectedFilters, filter] };
    }),
  // resetChips: () => set({ selectedChips: [0] }),
}));

export default useDesignSystemFilterStore;
