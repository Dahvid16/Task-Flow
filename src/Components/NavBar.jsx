import React from 'react'

const NavBar = () => {
  return (
    <header className='flex items-center w-4/5 justify-between px-10 rounded-full py-3 mx-[10%] fixed top-3 bg-white shadow-md'>
      <h1 className='main-txt'>TaskFlow</h1>
      <nav className='flex items-center gap-10'>
        <ul className='flex gap-5 text-lg list-none m-0'>
          <li><a className='anchor' href="#">Home</a></li>
          <li><a className='anchor' href="">Features</a></li>
          <li><a className='anchor' href="">Pricing</a></li>
          <li><a className='anchor' href="">Testimonies</a></li>
          <li><a className='anchor' href="">Contact</a></li>
        </ul>
        <button className='btnn text-white rounded-xl h-9 px-3 py-3 border-0'>Get Started free</button>
      </nav>
    </header>
  )
}

export default NavBar