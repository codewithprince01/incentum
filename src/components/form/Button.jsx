import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {
  return (
    <div className='border border-[#1DA1F2] flex justify-center max-w-full w-[20%] rounded-xl m-auto my-16 bg-[#1DA1F2] hover:bg-[#3fdee6]' >
        <Link to={"/presonal-details-formFour"}><button className='text-3xl font-medium py-4 text-white'>Next</button></Link>
    </div>
  )
}
