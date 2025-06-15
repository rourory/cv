import { create } from "zustand";

export const useLocaleStore = create<LocaleStore>((set) => ({
  locale: "en",
  setLocale: (locale) => set({ locale: locale }),
}));
