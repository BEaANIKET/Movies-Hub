import React from 'react'

export const Banner = ({ heading }) => {
    return (
        <div className=' mt-4 mb-4 w-full flex justify-center text-red-700 items-center text-2xl pb-4 pt-4 font-bold shadow-xl shadow-red-50'>
            <h1 className=' '>{heading} </h1>
        </div>
    )
}
