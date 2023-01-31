import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import HeroSec from '@/components/HeroSec'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fenil Sonani</title>
        <meta name="description" content="This is a personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <HeroSec />
      <Services />
      <Skills />
      {/* <SocialMedia title="fenil sonani" myclass"m-auto" /> */}
      <Projects />

      {/* <Navbar /> */}
    </>
  )
}
