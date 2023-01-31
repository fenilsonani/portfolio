/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import React from 'react'

const contact = () => {

    // const [name, setName] = React.useState('')
    // const [email, setEmail] = React.useState('')
    // const [message, setMessage] = React.useState('')
    // const [error, setError] = React.useState('')
    // const [success, setSuccess] = React.useState('')
    // const [loading, setLoading] = React.useState(false)



    return (
        <div>
            <Head>
        <title>Fenil Sonani-Contact</title>
        <meta name="description" content="This is a personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute grayscale-[2] contrast-[1.2] blur-[2px] inset-0" frameBorder={0} title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100115.84141276886!2d72.8228092356517!3d21.169217132260226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1675013187968!5m2!1sen!2sin" style={{}}></iframe>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14873.311390726325!2d72.83973144999999!3d21.25848635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1674989592064!5m2!1sen!2sin" width="600" height="450" allowFullScreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font text-gray-900 tracking-widest text-xl font-bold">ADDRESS</h2>
                                <p className="mt-1 font-semibold">Surat,Gujarat,India</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font text-gray-900 text-xl font-bold tracking-widest">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">contact.fenils@gmail.com</a>
                                <h2 className="title-font text-xl font-bold text-gray-900 tracking-widest  mt-4">PHONE</h2>
                                <p className="leading-relaxed">+91 8320550560</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Me</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Welcome to my contact page! I'm always eager to hear from new people, answer any questions you may have, and explore new opportunities. If you'd like to get in touch, please fill out the form below with your name, email, and message. I'll respond as soon as I can. You can also connect with me through my social media channels, linked at the bottom of this page. I look forward to hearing from you</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            {/* code that will show error message */}
                            <div className="text-red-500 text-xs italic hidden">Please fill out this field.</div>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact </button>
                        <p className="text-xs text-gray-500 mt-3">leave Your Email,Message and see magic...</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default contact