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
            title: 'Html',
            categorey: 'Frontend',
            progress: 80,
            icon: 'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png',

        },
        {
            id: 2,
            title: 'css',
            categorey: 'Frontend',
            progress: 90,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'
        },
        {
            id: 3,
            title: 'Scss',
            categorey: 'Frontend',
            progress: 90,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png'
        },
        {
            id: 4,
            title: 'Bootstrap',
            categorey: 'Frontend',
            progress: 75,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png'
        },
        {
            id: 5,
            title: 'Tailwind',
            categorey: 'Frontend',
            progress: 95,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png'
        },
        {
            id: 6,
            title: 'Javascript',
            categorey: 'Frontend',
            progress: 80,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
        },
        {
            id: 7,
            title: 'Typescript',
            categorey: 'Frontend',
            progress: 80,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
        },
        {
            id: 8,
            title: 'React',
            categorey: 'Frontend',
            progress: 80,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        {
            id: 9,
            title: 'Next.js',
            categorey: 'Frontend',
            progress: 90,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png'
        },
        {
            id: 10,
            title: 'Redux',
            categorey: 'Frontend',
            progress: 60,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Redux.png/1200px-Redux.png'
        },
        {
            id: 11,
            title: 'MongoDB',
            categorey: 'Database',
            progress: 80,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png'
        },
        {
            id: 12,
            title: 'MySQL',
            categorey: 'Database',
            progress: 90,
            icon: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png'
        },
        {
            id: 13,
            title: 'Node.js',
            categorey: 'Backend',
            progress: 70,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
        },
        {
            id: 14,
            title: 'Express.js',
            categorey: 'Backend',
            progress: 80,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/1200px-Expressjs.png'
        },
        {
            id: 23,
            title: 'Strapi',
            categorey: 'Backend Headless CMS',
            progress: 90,
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDubTs1TpYWxRlaSK_kxeeyr5Rzh4_PelgF-9v4YnE&s'
        },
        {
            id: 15,
            title: 'Git',
            categorey: 'Tools',
            progress: 80,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png'
        },
        {
            id: 16,
            title: 'Github',
            categorey: 'Tools',
            progress: 80,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png'
        },
        {
            id: 17,
            title: 'VS Code',
            categorey: 'Tools',
            progress: 95,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png'
        },
        {
            id: 18,
            title: 'php',
            categorey: 'Backend',
            progress: 40,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png'
        },
        {
            id: 19,
            title: 'C++',
            categorey: 'language',
            progress: 50,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'
        },
        {
            id: 20,
            title: 'Java',
            categorey: 'language',
            progress: 75,
            icon: 'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png'
        },
        {
            id: 21,
            title: 'Python',
            categorey: 'language',
            progress: 80,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'
        },
        {
            id: 22,
            title: 'C#',
            categorey: 'language',
            progress: 60,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png'
        },
    ]

    const main = {
        title: 'Skills',
        description: 'I can develop web applications using React, Next.js, Angular, Node.js, Express.js, MongoDB, MySQL, etc.',
    }

    return (
        // how to center the content of the div which class used for centering the content of the div answer is flex justify-center
        <div className='sm:w-[60%] m-auto' id='my-fenils'>
            <div className="my-f text-center">
                <h1 className='align-middle font-semibold text-3xl'>{main.title}</h1>
                <p className='text-gray-500 dark:text-gray-400'>{main.description}</p>
            </div>
            <div className="flex flex-wrap justify-center ">
                {loading ? <div className="text-center"><Loading /></div> :
                    skills.map(skill => (
                        <div key={skill.id} className='hover:bg-gray-200 bg-gray-100 md:w-1/3 transition-all focus:bg-gray-200 mx-11 my-10 p-4 rounded-xl'>
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-blue-700 flex items-center gap-2">
                                    <span className='m-3 border-[#383838] border-[1.5px] rounded-xl p-3'>
                                        <img src={skill.icon} alt="icon" className="w-auto h-10" />
                                    </span>
                                    {skill.title}</span>
                                <span className="text-sm font-medium text-blue-700 flex items-center">{skill.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.progress}%` }}></div>
                            </div>
                            <div className="mt-2">
                                <span className="text-md bg-slate-200 px-2 py-1 rounded-full m-auto text-gray-600">{skill.categorey}</span>
                            </div>
                        </div>
                    ))

                }
                {/* write a map method that display only where categorey is a frontend */}

            </div>
            {/* <div className='m-auto text-lg font-bold'>I Have Skills On Many Library And Framework </div> */}
        </div>
    )
}

export default Skills