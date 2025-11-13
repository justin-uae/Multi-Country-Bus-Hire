import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import School from './pages/School';
import Transfers from './pages/Transfers';
import Shuttles from './pages/Shuttles';
import Coorporate from './pages/Coorporate';
import AboutUs from './pages/AboutUs';
import ScrollToTop from './Components/ScrollToTop';
const Navbar = lazy(() => import('./components/Navbar'));

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense >
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/school-trips' element={<School />} />
            <Route path='/transfers' element={<Transfers />} />
            <Route path='/Shuttles' element={<Shuttles />} />
            <Route path='/corporate-events' element={<Coorporate />} />
            <Route path='/about' element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App