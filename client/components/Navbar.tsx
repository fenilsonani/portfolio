import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaDownload } from 'react-icons/fa';


const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={"/home"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src="/logo.png" width={60} height={60} className='bg-black p-3 rounded-full' alt="tailblocks" />
                        <span className="ml-3 text-xl">Fenil Sonani</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/home"} className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href={"/about"} className="mr-5 hover:text-gray-900">About</Link>
                        <Link href={"/contact"} className="mr-5 hover:text-gray-900">Contact Me</Link>
                        <Link href={"/certificates"} className="mr-5 hover:text-gray-900">Certificates</Link>
                    </nav>
                    <Link href={"/resume.pdf"} target={"_blank"}>
                        <button className="inline-flex items-center0 border-0 px-4 py-2 transition-all duration-150 ease-linear gap-2 focus:outline-none bg-gray-600 items-center hover:bg-gray-500 rounded text-white mt-4 md:mt-0"><FaDownload />Resume</button></Link>
                </div>
            </header>
        </>
    )
}

export default Navbar