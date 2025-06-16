import { useLocaleStore } from "../../../store/locale-store";

const FloatingButton = () => {
  const { locale, setLocale } = useLocaleStore();

  return (
    <img
      onClick={() => setLocale(locale === "ru-RU" ? "en-US" : "ru-RU")}
      src={`${process.env.PUBLIC_URL}/icons/${locale}.webp`}
      alt={locale}
      className="fixed cursor-pointer bottom-[100px] md:bottom-[95px] lg:bottom-[90px] right-6 lg:right-12 z-[60] w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-[103%] transition-all duration-200 uppercase select-none"
      draggable={false}
    />
  );
};

export default FloatingButton;
