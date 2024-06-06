import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

export const Card = ({ item }) => {

    const id = item.imdbID;

    const { setMovieDetailsData } = useAppContext();
    const handleClick = () => {
        window.scrollTo(0,0)
        setMovieDetailsData(item)
    }

    return (
        <>
            <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-4' key={item.imdbID}>
                <NavLink to={`/movie/${id}`}> 
                    <div onClick={ handleClick } className='bg-white shadow-md rounded-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-lg transition-transform duration-300'>
                    <img src={item.Poster} alt={item.Title} className='w-full h-64 object-cover' />
                    <div className='p-4'>
                        <h3 className='text-xl font-bold mb-2'>{item.Title}</h3>
                        <p className='text-gray-600'>{item.Year}</p>
                        <p className='text-gray-600 capitalize'>{item.Type}</p>
                    </div>
                </div>
                </NavLink>
                
            </div>
        </>

    )
}
