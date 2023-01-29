/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Loading from './Loading'
import { title } from 'process'
import Image from 'next/image'

const Skills = () => {

    const [loading, setLoading] = React.useState(false)
    // write a dummy array of skills

    // React.useEffect(() => {

    //     setTimeout(() => {
    //         setLoading(false)
    //         // let myelement=document.getElementById('my-fenils').classList.add('h-auto');


    //     }, 2000)
    // }, [])
    const skills = [
        {
            id: 1,
            title: 'Node.js',
            progress: 60,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png',

        },
        {
            id: 2,
            title: 'Next.js',
            progress: 80,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png'
        },
        {
            id: 3,
            title: 'Tailwind CSS',
            progress: 90,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png'
        },
        {
            id: 4,
            title: 'Sass',
            progress: 75,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png'
        },
    ]

    const main = {
        title: 'Skills',
        description: 'I can develop web applications using React, Next.js, Angular, Node.js, Express.js, MongoDB, MySQL, etc.',
    }

    return (
        // how to center the content of the div which class used for centering the content of the div answer is flex justify-center
        <div className='sm:w-1/2 m-auto' id='my-fenils'>
            <div className="my-f text-center">
                <h1 className='align-middle font-semibold text-3xl'>{main.title}</h1>
                <p className='text-gray-500 dark:text-gray-400'>{main.description}</p>
            </div>
            {loading ? <div className="text-center"><Loading /></div> :

                skills.map(skill => (
                    <div key={skill.id} className='hover:bg-gray-200 transition-all focus:bg-gray-200 mx-11 my-10 p-4 rounded-xl'>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-blue-700 dark:text-white flex items-center gap-2">
                                <span className='m-3 border-[#383838] border-[1.5px] rounded-xl p-3'>
                                    <img src={skill.icon} alt="icon" className="w-auto h-10" />
                                </span>
                                {skill.title}</span>
                            <span className="text-sm font-medium text-blue-700 dark:text-white">{skill.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.progress}%` }}></div>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default Skills