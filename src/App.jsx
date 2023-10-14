import { useState } from 'react'
import './index.css'
import { Navbar, Home, Search } from './components'
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    
    <BrowserRouter>
    <div className= "relative z-0 bg-primary">
      <div className>

      
      <Navbar />
      <Home />
      <Search />
      </div>
      <div className="relative z-0">
       {/*footer*/}
      </div>
    </div>


    </BrowserRouter>
    
  )
}

export default App
