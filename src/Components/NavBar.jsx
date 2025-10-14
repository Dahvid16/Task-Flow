import React from 'react'

const NavBar = () => {
  return (
    <header className='flex items-center w-4/5 justify-between px-10 rounded-full py-3 mx-[10%] fixed top-2 bg-white shadow-md'>
            <h1 className='text-xl'>TaskFlow</h1>
            <nav className='flex gap-10 items-center'>
        <ul className='flex gap-5 text-lg list-none'>
          <li><a className='no-underline' href="">Home</a></li>
          <li><a className='no-underline' href="">Features</a></li>
          <li><a className='no-underline' href="">Pricing</a></li>
          <li><a className='no-underline' href="">Testimonies</a></li>
          <li><a className='no-underline' href="">Contact</a></li>
        </ul>
                <button className='rounded-xl h-9 px-2 border-0'>Get Started free</button>
            </nav>
    </header>
  )
}

export default NavBar