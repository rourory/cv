type AppLocale = "ru-RU" | "en-US" | "de-DE";

interface LocaleStore {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
}
