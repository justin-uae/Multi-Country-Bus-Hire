import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import School from './pages/School';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-20"> {/* Added padding-top to account for fixed navbar */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/school-trips' element={<School />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App