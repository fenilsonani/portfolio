import HeroSec from '@/components/HeroSec'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import React from 'react'

const home = () => {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <Services />
      <Skills />
    </div>
  )
}

export default home