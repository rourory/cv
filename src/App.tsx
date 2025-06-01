import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
