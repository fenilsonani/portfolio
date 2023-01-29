import Image from 'next/image'
import React from 'react'
import Skills from './Skills'

const AboutHeroRight = (props: any) => {
    return (
        <div className='hover:bg-gray-50  m-10 rounded-2xl'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={props.imgUrl} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900">{props.title} </h1>
                        <p className="mb-4 leading-relaxed font-bold text-xl">{props.descTitle}</p>

                        <p className="mb-8 leading-relaxed text-lg">{props.desc}</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutHeroRight