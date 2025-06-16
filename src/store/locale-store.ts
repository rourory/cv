import { create } from "zustand";

export const useLocaleStore = create<LocaleStore>((set) => ({
  locale: "en-US",
  setLocale: (locale) => set({ locale: locale }),
}));
