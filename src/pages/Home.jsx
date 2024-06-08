import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { getDataApi } from '../getData/GetData'
import { DisplayHomeMovie } from '../components/DisplayHomeMovie';
import { Banner } from '../components/Banner';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { Loder } from './Loder';

export const Home =  () => {

 const {data, newMovies, englishMovies, hindiMovies, bollywoodMovies, hollywoodMovies } = useAppContext();

 if(data.length === 0 || newMovies.length === 0 || englishMovies.length === 0 || bollywoodMovies.length === 0 || hollywoodMovies.length === 0 || englishMovies.length === 0){
  return (
    <Loder text={"Loading..."} />
  )
 }
  return (
    <>
    <div className=' w-full h-fit bg-black'>
        <Navbar />

        <Banner heading={"New"} />
        <DisplayHomeMovie Data={newMovies} />

        <Banner heading={"Hindi"} />
        <DisplayHomeMovie Data={hindiMovies} />

        <Banner heading={"English"} />
        <DisplayHomeMovie Data={englishMovies} />

        <Banner heading={"Bollywood"} />
        <DisplayHomeMovie Data={bollywoodMovies} />

        <Banner heading={"Hollywood"} />
        <DisplayHomeMovie Data={hollywoodMovies} />

        <Banner heading={"Trending"} />
        <DisplayHomeMovie Data={data} />

        <Footer />
    </div>
     
    </>
  )
}
