/* eslint-disable react/jsx-no-undef */
import React from 'react'

const AboutHeroLeft = (props: any) => {
    return (
        <div className='hover:bg-gray-100 m-10 rounded-2xl'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{props.title}</h1>
                        <p className="mb-4 leading-relaxed font-bold text-xl">{props.descTitle}</p>
                        <p className="mb-8 leading-relaxed">{props.desc}</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img src={props.imgUrl} className="object-cover object-center rounded" alt="tailblocks" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutHeroLeft