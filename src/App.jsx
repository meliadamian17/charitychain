import { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Home, Search, Badges, Carousel, CharityCard, Account, Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 my-main-bg">
        <Navbar />
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={
            <div>
              <Home />
              <Carousel />
              <Badges />
            </div>
          } />
          
          {/* Route for the account page */}
          <Route path="/account" element={<Account />} />

        </Routes>

        <div className="relative z-0">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

