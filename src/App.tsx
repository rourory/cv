import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import React from "react";

import enMessages from "./locales/en-US/translation.json";
import ruMessages from "./locales/ru-RU/translation.json";
import { IntlProvider } from "react-intl";
import { useLocaleStore } from "./store/locale-store";
import getUserLocale from "get-user-locale";

const messages = {
  "en-US": enMessages,
  "ru-RU": ruMessages,
  "de-DE": ruMessages,
};
function App() {
  const { locale, setLocale } = useLocaleStore();

  React.useEffect(() => {
    const locale = getUserLocale({ fallbackLocale: "en-US" });
    setLocale(locale as AppLocale);
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
