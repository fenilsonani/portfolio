/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import CominSoon from './CominSoon'

const Projects = () => {


    // create a dummy array of projects

    const projects = [
        {
            id: 1,
            categorey: 'React',
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: 'https://dummyimage.com/600x600',
            link: 'https://www.google.com'
        },
        {
            id: 2,
            categorey: 'React',
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: 'https://dummyimage.com/600x600',
            link: 'https://www.google.com'
        },
    ]


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-4xl font-bold mb-4 text-gray-900">Projects</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Projects Are Developed by me using React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, Typescript and more.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {/* {projects.map(project => (
                        <div key={project.id} className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-10 pb-10 rounded-3xl overflow-hidden text-center relative">
                                <img src="https://dummyimage.com/600x400/000/fff" className='mb-5 rounded-2xl' alt="" />
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{project.categorey}</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{project.title}</h1>
                                <p className="leading-relaxed mb-3">{project.description}</p>
                                <Link href={`http://localhost:3000/projects/${project.id}`} className="text-indigo-500 inline-flex items-center">Show Detail
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))} */}
                    <div className="m-auto">
                        <CominSoon pageName='Project' />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Projects