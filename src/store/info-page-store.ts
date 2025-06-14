import { create } from "zustand"

export const useInfoPageStore = create<InfoPageStore>((set) => ({
  selectedBlock: "info",
  setSelectedBlock: (block) => set({ selectedBlock: block }),
}))