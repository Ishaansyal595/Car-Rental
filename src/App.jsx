import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cars from "./pages/Cars";
import CrossoversPage from "./pages/CarCategory/CrossoversPage";
import HatchbacksPage from "./pages/CarCategory/hatchbacksPage";
import LuxuryPage from "./pages/CarCategory/LuxuryPage";
import MPVPage from "./pages/CarCategory/MPVPage";
import SedanPage from "./pages/CarCategory/SedanPage";
import SportsPage from "./pages/CarCategory/SportsPage";
import SUVPage from "./pages/CarCategory/SUVPage";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Cars */}
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/crossovers" element={<CrossoversPage />} />
        <Route path="/cars/hatchbacks" element={<HatchbacksPage />} />
        <Route path="/cars/luxuries" element={<LuxuryPage />} />
        <Route path="/cars/mpv" element={<MPVPage />} />
        <Route path="/cars/sedans" element={<SedanPage />} />
        <Route path="/cars/sports" element={<SportsPage />} />
        <Route path="/cars/suv" element={<SUVPage />} />

        {/* Blogs */}
        <Route path="/blogs" element={<Blogs />} />

        {/* Contact Us */}
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
