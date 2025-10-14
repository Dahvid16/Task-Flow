import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import FeaturesSection from './Components/FeaturesSection'
import '../src/Styling/Global.css'

const App = () => {
  return (
    <body>
    <NavBar/>
    <HeroSection/>
    <FeaturesSection/>
    </body>
  )
}

export default App