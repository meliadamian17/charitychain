import { useEffect, useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Home, Search, Badges, Carousel, CharityCard, Account, Footer } from './components';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { AuthProvider } from './contexts/AuthContext';


const App = () => {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // This observer returns a method to unsubscribe whenever we want to stop listening
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setCurrentUser(user);
      } else {
        // User is signed out.
        setCurrentUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();

  }, []);

  return (
    <AuthProvider>
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
    </AuthProvider>
  )
}

export default App;

