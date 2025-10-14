import React from 'react'

const HeroSection = () => {
  return (
    <section className='flex items-center justify-center h-[65svh] px-16 sec'>
        <div className="flex flex-col justify-center items-center text-center gap-6">
            <h1 className='text-6xl font-bold text-gray-800'>Simplify Your Workflow with TaskFlow</h1>
            <p className='text-xl text-gray-600 w-2/5'>TaskFlow is your ultimate task management solution. Organize, prioritize, and track your tasks effortlessly with our intuitive platform.</p>
            <div className="flex gap-4">
                <button className='rounded-xl h-14 px-5 border-0 text-white font-semibold'>Get Started free</button>
                <button className='bg-transparent border-2 border-gray-600 rounded-xl h-14 px-5 cursor-pointer text-gray-600 font-semibold'>Watch Demo</button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection