import { create } from "zustand";

interface IComboBoxStore {
  isComboBoxOpen: boolean;
  toggleComboBox: () => void;
}

const useComboBoxStore = create<IComboBoxStore>((set) => ({
  isComboBoxOpen: false,
  toggleComboBox: () =>
    set((state) => ({ isComboBoxOpen: !state.isComboBoxOpen })),
}));

export default useComboBoxStore;
