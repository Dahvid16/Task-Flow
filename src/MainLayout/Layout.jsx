import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import ContactFooter from '../Components/ContactSection'

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet/>
      <ContactFooter/>
    </>
  )
}

export default MainLayout