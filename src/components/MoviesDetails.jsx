import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataApi } from '../getData/GetData';
import { useAppContext } from '../context/AppContext';
import { DisplayHomeMovie } from './DisplayHomeMovie';
import { Banner } from './Banner';
import Footer from './Footer';
import { Navbar } from './Navbar';

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const { movieDetailsData } = useAppContext();

    const { bollywoodMovies } = useAppContext()

    useEffect(() => {
        setMovie(movieDetailsData)
    }, [movieDetailsData])
    return (
        <div className=' w-full flex items-center justify-center bg-black flex-col'>
            <Navbar />
            <div className="min-fit w-full flex justify-center items-start bg-black text-white p-4 md:p-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                    <img src={movie.Poster} alt={movie.Title} className="w-full md:w-1/2 h-auto max-w-[500px] max-h-[500px] rounded-lg shadow-lg" />
                    <div className="md:ml-10 mt-6 md:mt-0">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{movie.Title}</h1>
                        <p className="text-lg md:text-xl mb-4"><strong>Year:</strong> {movie.Year}</p>
                        <p className="text-lg md:text-xl mb-4"><strong>Genre:</strong> {movie.Genre}</p>
                        <p className="text-lg md:text-xl mb-4"><strong>Director:</strong> {movie.Director}</p>
                        <p className="text-lg md:text-xl mb-4"><strong>Actors:</strong> {movie.Actors}</p>
                        <p className="text-lg md:text-xl mb-4"><strong>Plot:</strong> {movie.Plot}</p>
                        <p className="text-lg md:text-xl mb-4"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                    </div>
                </div>
            </div>
            <Banner heading = {"Bollywood"} />
                <DisplayHomeMovie Data={bollywoodMovies} />

            <Footer />
        </div>

    );
};
