import { create } from "zustand";
import { COMPONENT_CONTEXT_MENU_ITEM_LABELS } from "@/constants/contextMenuLabels";

interface IContextMenuStore {
  selectedLabel: string;
  isContextMenuOpen: boolean;
  selectContextMenu: (label: string) => void;
  toggleContextMenu: () => void;
}

const useContextMenuStore = create<IContextMenuStore>((set) => ({
  selectedLabel: COMPONENT_CONTEXT_MENU_ITEM_LABELS[0],
  isContextMenuOpen: false,
  selectContextMenu: (selectedLabel) => set({ selectedLabel }),
  toggleContextMenu: () => set((state) => ({ isContextMenuOpen: !state.isContextMenuOpen })),
}));

export default useContextMenuStore;
