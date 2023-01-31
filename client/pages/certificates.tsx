/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

const certi = () => {
    return (
        <div>
            {/* code that will show certificates */}
            <h1 className="text-4xl font-bold text-center text-gray-900">Certificates</h1>
            <p className="text-center text-gray-500">Here are some of my certificates</p>
            {/* <iframe src="https://www.hackerrank.com/certificates/iframe/8364a5ca9cb5" width="100%" height="1000px" frameBorder="0" scrolling="no" marginHeight={0} marginWidth=
        {0} title="certificates"></iframe> */}
            <h1 className="text-xl my-5 font-bold text-center text-gray-900">hackerrank rank Certification Are Not Ifframing So we Can't diplay it so Providing Hackker Rank Profile Link Link</h1>
            <div className="text-center my-10 text-3xl">
                <Link href="https://www.hackerrank.com/fenilsonani" target={"_blank"} className="text-center bg-green-600 px-4 py-2 rounded-2xl text-gray-900">Hackerrank Rank Profile</Link>
            </div>
        </div>
    )
}

export default certi