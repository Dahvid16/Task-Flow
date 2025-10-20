import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => {
        setIsOpen(!isOpen);
    }

  return (
    <header className='flex items-center w-[90%] md:w-4/5 justify-between px-10 rounded-full md:py-[0.7rem] py-1 md:mx-[10%] mx-[5%] fixed top-2 bg-white shadow-md z-50'>
      <h1 className='main-txt'>TaskFlow</h1>
      <nav className='flex none items-center gap-10 navMenu'>
        <ul className='flex gap-4 text-lg list-none m-0'>
          <li className='rounded-4xl p-2'><a className='anchor' href="#Home">Home</a></li>
          <li className='rounded-4xl p-2'><a className='anchor' href="#Features">Features</a></li>
          <li className='rounded-4xl p-2'><a className='anchor' href="#Testimonies">Testimonies</a></li>
          <li className='rounded-4xl p-2'><a className='anchor' href="#Pricing">Pricing</a></li>
          <li className='rounded-4xl p-2'><a className='anchor' href="#Contact">Contact</a></li>
        </ul>
        <button className='btnn text-white rounded-xl h-9 px-3 py-3 border-0'>Get Started free</button>
      </nav>
      <div className="closeNav">
      <div className="cursor-pointer" id="" onClick={open}>
        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </div>
      {isOpen && (
        <>
          <nav className='flex flex-col absolute items-center top-20 left-0 w-full bg-white py-6 px-10 shadow-md gap-6 z-40 rounded-t-4xl rounded-b-2xl'>
            <ul className='flex flex-col items-center gap-4 text-xl list-none m-0 p-0 w-full text-center'>
              <a className='anchor w-full' href="#Home" onClick={open}>
                <li className='rounded-4xl w-full py-2'>
                  Home
                </li>
              </a>
              <a className='anchor w-full' href="#Features" onClick={open}>
                <li className='rounded-4xl w-full py-2'>
                  Features
                </li>
              </a>
              <a className='anchor w-full' href="#Testimonies" onClick={open}>
                <li className='rounded-4xl w-full py-2'>
                  Testimonies
                </li>
                </a>
              <a className='anchor w-full' href="#Pricing" onClick={open}>
                <li className='rounded-4xl w-full py-2'>
                  Pricing
                </li>
              </a>
              <a className='anchor w-full' href="#Contact" onClick={open}>
                <li className='rounded-4xl w-full py-2'>
                  Contact
                </li>
              </a>
            </ul>
            <button className='btnn text-white rounded-xl h-12 px-3 py-3 border-0' onClick={open}>Get Started free</button>
          </nav>
        </>
      )}
      </div>
    </header>
  )
}

export default NavBar