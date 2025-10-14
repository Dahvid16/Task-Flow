import React from 'react'

const NavBar = () => {
  return (
    <>
    <header className='flex justify-center items-center w-4/5 gap-36 px-10 rounded-full py-4 text-white mx-auto'>
            <h1 className='text-2xl'>TaskFlow</h1>
            <nav className='flex gap-10 items-center'>
                <ul className='flex gap-5 text-lg'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonies</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <button className='rounded-xl h-9 px-2 border-0'>Get Started free</button>
            </nav>
    </header>
    </>
  )
}

export default NavBar