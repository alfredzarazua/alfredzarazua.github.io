

import { Routes, Route } from "react-router-dom";
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import Navbar from '../Components/Navbar/Navbar';

export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="*" element={<Navbar />} />
        
      </Routes>
    </ScrollToTop>
  );
}

