import Link from 'next/link'
import React from 'react'
import Script from 'next/script'

const Services = () => {


    // write a dummy array of services

    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'I can develop web applications using React, Next.js, Angular, Node.js, Express.js, MongoDB, MySQL, etc.',
            icon: 'fas fa-laptop-code',
        },
        {
            id: 2,
            title: 'Mobile Development',
            description: 'I can develop mobile applications using React Native, Flutter, etc.',
            icon: 'fas fa-mobile-alt'
        },
        {
            id: 3,
            title: 'Mobile Development',
            description: 'I can develop mobile applications using React Native, Flutter, etc.',
            icon: 'fas fa-mobile-alt'
        },
        {
            id: 4,
            title: 'Mobile Development',
            description: 'I can develop mobile applications using React Native, Flutter, etc.',
            icon: 'fas fa-mobile-alt'
        },
        {
            id: 5,
            title: 'Mobile Development',
            description: 'I can develop mobile applications using React Native, Flutter, etc.',
            icon: 'fas fa-mobile-alt',
        },
    ]
    return (
        <div>
            < Script src="https://kit.fontawesome.com/0aa05e1cf3.js" crossOrigin="anonymous" ></Script>
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js" defer></script>
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
                                <div key={service.id} className="p-4 rounded-xl fouces:bg-gray-200 hover:bg-gray-200 md:w-1/3 flex flex-col text-center items-center">
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