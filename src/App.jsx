import { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Home, Search, Badges, Carousel, CharityCard, Account } from './components';

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
              {/* ... any other components for the home page */}
            </div>
          } />
          
          {/* Route for the account page */}
          <Route path="/account" element={<Account />} />

          {/* Add more Routes as needed */}
        </Routes>

        <div className="relative z-0">
          {/*footer*/}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

