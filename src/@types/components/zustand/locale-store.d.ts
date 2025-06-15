type AppLocale = "ru" | "en";

interface LocaleStore {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
}
