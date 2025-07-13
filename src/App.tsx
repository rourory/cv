import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import React, { useState } from "react";

import TypesafeI18n from "./i18n/i18n-react";
import { localStorageDetector } from "typesafe-i18n/detectors";
import { loadLocaleAsync } from "./i18n/i18n-util.async";
import { detectLocale } from "./i18n/i18n-util";

const detectedLocale = detectLocale(localStorageDetector);

function App() {
  const [wasLoaded, setWasLoaded] = useState(false);

  React.useEffect(() => {
    console.log(detectedLocale);
    loadLocaleAsync(detectedLocale).then((v) => {
      setWasLoaded(true);
    });
  }, []);

  if (!wasLoaded) return null;

  return (
    <TypesafeI18n locale={detectedLocale}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </TypesafeI18n>
  );
}

export default App;
