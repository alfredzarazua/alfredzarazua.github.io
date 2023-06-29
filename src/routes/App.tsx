

import { Routes, Route } from "react-router-dom";
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import HomePage from "../Pages/HomePage";

export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="*" element={<HomePage />} />
        
      </Routes>
    </ScrollToTop>
  );
}

