import { create } from "zustand";

interface ISearchStore {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const useSearchStore = create<ISearchStore>((set) => ({
  searchValue: "",
  setSearchValue: (value) => set({ searchValue: value }),
}));

export default useSearchStore;
