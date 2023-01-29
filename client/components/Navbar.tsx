import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa';


const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src="/logo.png" width={60} height={60} className='bg-black p-3 rounded-full' alt="tailblocks" />
                        <span className="ml-3 text-xl">Fenil Sonani</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">First Link</a>
                        <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>
                    <button className="inline-flex items-center0 border-0 px-4 py-2 transition-all duration-150 ease-linear gap-2 focus:outline-none bg-gray-600 items-center hover:bg-gray-500 rounded text-white mt-4 md:mt-0"><FaDownload />Resume</button>
                </div>
            </header>
        </>
    )
}

export default Navbar