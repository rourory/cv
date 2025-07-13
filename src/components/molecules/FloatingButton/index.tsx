import React, { useCallback, useEffect, useState } from "react";
import { useI18nContext } from "../../../i18n/i18n-react";
import { loadLocaleAsync } from "../../../i18n/i18n-util.async";
import { Locales } from "../../../i18n/i18n-types";

const availableLocales: Locales[] = ["ru", "en", "de", "pl"];

const FloatingButton = () => {
  const { locale, setLocale } = useI18nContext();

  const [localeIndex, setLocaleIndex] = useState(0);

  useEffect(() => {
    const localeIndex = availableLocales.findIndex((l) => l === locale);
    setLocaleIndex(localeIndex);
  }, []);

  const onLocaleSelected = useCallback(async () => {
    let locale: Locales = "en";

    if (localeIndex === availableLocales.length - 1) {
      locale = availableLocales[0];
      setLocaleIndex(0);
    } else {
      locale = availableLocales[localeIndex + 1];
      setLocaleIndex(localeIndex + 1);
    }
    localStorage.setItem("lang", locale);
    await loadLocaleAsync(locale);
    setLocale(locale);
  }, [localeIndex, setLocale, setLocaleIndex]);

  return (
    <img
      aria-label="Change locale"
      onClick={onLocaleSelected}
      src={`${process.env.PUBLIC_URL}/icons/${locale}.webp`}
      alt={locale}
      className="fixed cursor-pointer bottom-[80px] sm:bottom-[100px] md:bottom-[95px] lg:bottom-[90px] right-6 lg:right-12 z-[60] w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-[103%] transition-all duration-200 uppercase select-none"
      draggable={false}
    />
  );
};

export default FloatingButton;
