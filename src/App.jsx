import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import FeaturesSection from './Components/FeaturesSection'
import '../src/Styling/Global.css'
import TestimonialSection from './Components/TestimonalSection'
import PricingSection from './Components/PricingSection'
import ContactSection from './Components/ContactSection'

const App = () => {
  return (
    <main>
      <NavBar/>
      <HeroSection/>
      <FeaturesSection/>
      <TestimonialSection/>
      <PricingSection/>
      <ContactSection/>
    </main>
  )
}

export default App