import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import { useState } from "react";

import enMessages from "./locales/en/translation.json";
import ruMessages from "./locales/ru/translation.json";
import { IntlProvider } from "react-intl";
import { useLocaleStore } from "./store/locale-store";

const messages = {
  en: enMessages,
  ru: ruMessages,
};
function App() {
  const { locale } = useLocaleStore();

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
