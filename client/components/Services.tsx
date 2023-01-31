import Link from 'next/link'
import React from 'react'
import Script from 'next/script'

const Services = () => {


    // write a dummy array of services

    const services = [
        {
            id: 1,
            title: 'Web application development using MongoDB, Express, React and Node.js (MERN)',
            description: 'Web Application Development using MongoDB, Express, React and Node.js - You can develop full-stack web applications with a MongoDB database server-side API built with Express, a front-end interface built with React, and an application server built with Node.js.',
            icon: 'fas fa-laptop-code',
        },
        {
            id: 2,
            title: 'E-commerce website development',
            description: 'E-commerce Website Development - You can design and develop e-commerce websites that allow businesses to sell products and services online, manage orders, and process payments securely.            ',
            icon: 'fas fa-shopping-cart',
        },
        {
            id: 3,
            title: 'Real-time chat applications',
            description: 'Real-time Chat Applications - You can create real-time chat applications that allow users to communicate in real-time with each other through a web interface.  ',
            icon: 'fas fa-comments',
        },
        {
            id: 4,
            title: 'CRUD (Create, Read, Update, Delete) operations on a database    ',
            description: 'CRUD (Create, Read, Update, Delete) Operations on a Database - You can develop web applications that perform CRUD operations on a MongoDB And Mysql database,allowing users to create, read, update, and delete data as needed.            ',
            icon: 'fas fa-database',
        },
        {
            id: 5,
            title: 'Content management systems (CMS)            ',
            description: 'Content Management Systems (CMS) - You can develop custom CMS solutions that allow businesses to manage their website content easily and efficiently',
            icon: 'fas fa-file',
        },
        {
            id: 6,
            title: 'Single page applications (SPA)            ',
            description: 'Single Page Applications (SPA) - You can develop single page applications that allow users to interact with a web application without having to reload the page.            ',
            icon: 'fas fa-paperclip',
        },
        {
            id: 7,
            title: 'Api development',
            description: 'API Development - You can develop APIs that allow applications to communicate with each other and share data.            ',
            icon: 'fas fa-mobile-alt',
        },
        {
            id: 8,
            title: 'Responsive web design and development',
            description: 'Responsive Web Design and Development - You can design and develop responsive websites that adapt to the size of the screen they are being viewed on.            ',
            icon: 'fas fa-mobile',
        },
        {
            id: 9,
            title: 'Integration with third-party APIs.',
            description: 'Integration with Third-Party APIs - You can integrate your web applications with third-party APIs to allow users to access data from those APIs.            ',
            icon: 'fas fa-mobile-alt',
        },
    ]
    return (
        <div>
            < Script src="https://kit.fontawesome.com/0aa05e1cf3.js" crossOrigin="anonymous" ></Script>
            {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js" defer></script> */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto ">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">My Services</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">i can proviede servieces listed below</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        {
                            services.map(service => (
                                <div key={service.id} className="p-4 rounded-xl fouces:bg-gray-200  transition-all hover:bg-gray-200 md:w-1/3 flex flex-col text-center items-center">
                                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                        {/* idenficer expcted error coming */}
                                        <i className={`${service.icon} scale-150`}></i>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                            {service.title}
                                        </h2>
                                        <p className="leading-relaxed text-base">{service.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Services