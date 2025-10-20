import React from 'react'
import { Reveal } from '../Reveal'

const HeroSection = () => {
  return (
    <section id='Home' className='paddin flex items-center justify-center h-[80svh] md:h-[80svh] px-6 md:px-16 sec'>
      <Reveal>
      <div className="flex flex-col justify-center items-center text-center gap-6">
        <h1 className='text-8xl font-bold text-gray-800'>Simplify Your Workflow with TaskFlow</h1>
        <p className='text-xl text-center text-gray-600 md:w-2/5'>TaskFlow is your ultimate task management solution. Organize, prioritize, and track your tasks effortlessly with our intuitive platform.</p>
        <div className="flex gap-4">
          <button className='btnn rounded-xl h-14 md:px-5 px-3 border-0 text-white font-semibold hover:bg-green-700'>Get Started free</button>
          <button className='btnn bg-transparent border-2 border-gray-600 rounded-3xl h-14 md:px-5 px-3 cursor-pointer text-gray-500 font-semibold hover:bg-gray-100'>Watch Demo</button>
        </div>
      </div>
      </Reveal>
    </section>
  )
}

export default HeroSection