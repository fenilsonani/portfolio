import Script from 'next/script'
import React from 'react'

const SocialMedia = (props:any) => {
    return (
        <div className="">
            <Script src="https://kit.fontawesome.com/0aa05e1cf3.js" crossOrigin="anonymous" ></Script>
            <div className="flex social-media ">
                {/* <h1>{props.title}</h1> */}
                <i className="fab fa-github  scale-[2] text-black bg-gray-200 p-1 rounded-full m-2 mx-10"></i>
                <i className="fab fa-snapchat scale-[2] text-black bg-gray-200 p-1 rounded-full m-2 mx-10"></i>
                <i className="fab fa-facebook scale-[2] text-black bg-gray-200 p-1 rounded-full m-2 mx-10"></i>
                <i className="fab fa-github scale-[2] text-black bg-gray-200 p-1 rounded-full m-2 mx-10"></i>
                <i className="fab fa-linkedin scale-[2] text-black bg-gray-200 p-1 rounded-full m-2 mx-10"></i>
            </div>
        </div>
    )
}

export default SocialMedia