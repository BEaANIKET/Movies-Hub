import React from 'react'

export const Loder = ({text}) => {
  return (
    <div className=' w-full h-screen bg-black flex items-center justify-center text-white'>
        <div className=' text-3xl text-white font-bold'>
            {text}
        </div>
    </div>
  )
}
