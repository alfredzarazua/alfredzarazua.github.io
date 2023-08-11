

import { Routes, Route } from "react-router-dom";
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import HomePage from "../Pages/HomePage";
import UnoProjectPage from "../Pages/UnoProjectPage";
import CompilerPage from "../Pages/SicXECompilerPage";
import AudioFilterPage from "../Pages/AudioFilterPage";
import UnknownPage from "../Pages/UnknownPage";

export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/uno-game" element={<UnoProjectPage />} />
        <Route path="/sicxe-compiler" element={<CompilerPage />} />
        <Route path="/audio-filter" element={<AudioFilterPage />} />
        <Route path="/not-available-yet" element={<UnknownPage />} />
      </Routes>
    </ScrollToTop>
  );
}

