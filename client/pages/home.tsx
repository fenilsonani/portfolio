import HeroSec from '@/components/HeroSec'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import SocialMedia from '@/components/SocialMedia'
import Head from 'next/head'
import React from 'react'

const home = () => {
  return (
    <div>
      <Head>
        <title>Fenil Sonani-Home</title>
        <meta name="description" content="This is a personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <HeroSec />
      <Services />
      <Skills />
      {/* <SocialMedia title="fenil sonani" myclass"m-auto" /> */}
      <Projects />
    </div>
  )
}

export default home