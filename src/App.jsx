import { useState } from 'react'
import './index.css'
import { Navbar, Home, Search, Badges, Carousel, CharityCard } from './components'
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    
    <BrowserRouter>
    <div className= "relative z-0 my-main-bg">
      <div className>

      
      <Navbar />
      <Home />
      {/* <CharityCard /> */}
      <Search />
      <Carousel />
      <Badges />
      </div>
      <div className="relative z-0">
       {/*footer*/}
      </div>
    </div>


    </BrowserRouter>
    
  )
}

export default App
