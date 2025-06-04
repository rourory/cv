import { create } from "zustand"

type InfoBlockTypes = "frontend" | "backend" | "info"
interface InfoPageStore {
  selectedBlock: InfoBlockTypes
  setSelectedBlock: (block: InfoBlockTypes) => void
}


export const useInfoPageStore = create<InfoPageStore>((set) => ({
  selectedBlock: "info",
  setSelectedBlock: (block) => set({ selectedBlock: block }),
}))