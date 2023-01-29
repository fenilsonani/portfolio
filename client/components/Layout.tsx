import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({childern}) => {
  return (
    <div>
        <Navbar/>
        {childern}
        <Footer/>
    </div>
  )
}

export default Layout