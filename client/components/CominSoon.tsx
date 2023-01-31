import React from 'react'

const CominSoon = (props:any) => {
  return (
    <div>
        {/* code for a coming Soon section */}

        <h1 className="text-4xl font-bold text-center text-gray-900">Coming Soon</h1>
        <p className="text-center text-gray-500"><span className='text-xl font-bold'> {props.pageName} </span> page is under construction Coming Soon As Soon As Possible</p>

        <img src="https://cdni.iconscout.com/illustration/premium/thumb/coming-soon-banner-4075742-3373565.png" className='mb-5 rounded-2xl' alt="" />

    </div>
  )
}

export default CominSoon