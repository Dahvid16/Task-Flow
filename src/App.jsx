import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import FeaturesSection from './Components/FeaturesSection'
import '../src/Styling/Global.css'
import TestimonialSection from './Components/TestimonalSection'

const App = () => {
  return (
    <body>
    <NavBar/>
    <HeroSection/>
    <FeaturesSection/>
    <TestimonialSection/>
    </body>
  )
}

export default App