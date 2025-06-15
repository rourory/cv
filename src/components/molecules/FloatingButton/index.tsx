import React from "react";
import { useLocaleStore } from "../../../store/locale-store";

const FloatingButton = () => {
  const { locale, setLocale } = useLocaleStore();

  return (
    <button
      onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
      className="fixed cursor-pointer bottom-[100px] right-6 z-[60] w-14 h-14 border backdrop-blur-3xl text-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-800 transition-all duration-200"
    >
      <p className="uppercase">
      {locale}

      </p>
    </button>
  );
};

export default FloatingButton;
