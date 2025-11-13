import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
const Navbar = lazy(() => import("./Components/Navbar"));
const Footer = lazy(() => import("./Components/Footer"));
const School = lazy(() => import("./pages/School"));
const Coorporate = lazy(() => import("./pages/Coorporate"));
const Transfers = lazy(() => import("./pages/Transfers"));
const Shuttles = lazy(() => import("./pages/Shuttles"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense>
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/school-trips" element={<School />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/Shuttles" element={<Shuttles />} />
            <Route path="/corporate-events" element={<Coorporate />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
