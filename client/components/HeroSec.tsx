/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const HeroSec = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div className="writer">
                            <h1 className="title-font writer-text sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Fenil Sonani</h1>
                        </div>
                        <div className="writer">
                            <h1 className='title-font writer-text sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>'MERN' stack developer</h1>
                        </div>
                        <p className="mb-8 leading-relaxed">As a Software developer, I have a strong understanding of the latest web development technologies and a proven track record of delivering high-quality, responsive websites that engage users and meet business objectives. My skills include proficiency in HTML, CSS, JavaScript, and various web development frameworks such as React and Angular. I have experience in both front-end and back-end development, and I am comfortable working in a collaborative team environment or independently.  also have experience working with programming languages such as Python, Java, and C++. This allows me to bring a diverse set of skills to any project, and provides me the ability to develop web applications that are dynamic, robust and scalable. I am comfortable working in a collaborative team environment or independently and always looking to learn new technologies and stay up-to-date with the latest web development trends.</p>
                        <div className="flex justify-center gap-2">
                            <Link href="https://github.com/fenilsonani/" target={"_blank"} passHref>
                            <button className="inline-flex gap-2 text-white bg-gray-800 transition-all ease-in duration-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg items-center"><BsGithub />Github</button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/fenil-sonani-bb4483235/" passHref>
                            <button className="inline-flex gap-2 text-white bg-[#2677a3] transition-all ease-in duration-200 border-0 py-2 px-6 focus:outline-none hover:bg-[#206a92] rounded text-lg items-center"><BsLinkedin />Linkedin</button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded-3xl" width={720} height={600} alt="hero" src="/myphoto.jpeg" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSec