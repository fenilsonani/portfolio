// @ts-nocheck

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ childern }) => {
  // const { data, error } = useSWR('/api/navigation', fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return (
    <>
      <Navbar />
      <main>
        {childern}
      </main>
      <Footer />
    </>
  )
}

export default Layout