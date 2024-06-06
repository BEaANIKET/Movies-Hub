
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getDataApi } from '../getData/GetData';

const AppContext = createContext();

export const ContextProvider = ( {children} ) => {

    const [movieDetailsData, setMovieDetailsData] = useState([])
    const [searchQuery, setSearchQuery] = useState ("")

    const [data, setData] = useState([]);
  const [newMovies, setnewMovies] = useState([]);
  const [englishMovies, setEnglishMovies] = useState([]);
  const [hindiMovies, setHindiMovies] = useState([]);
  const [bollywoodMovies, setBollywoodMovies] = useState([]);
  const [hollywoodMovies, setHollywoodMovies] = useState([]);
  

  useEffect(() => {
    const fetchData = async (q, container) => {
      const temp = await getDataApi(q);
      // console.log(temp.Search);
      container(temp.Search);
    };

    fetchData("trending", setData)
    fetchData("new", setnewMovies)
    fetchData("hindi", setHindiMovies)
    fetchData("english", setEnglishMovies)
    fetchData("bollywood", setBollywoodMovies)
    fetchData("hollywood", setHollywoodMovies)

  }, []);
    

    const AllData = {searchQuery, setSearchQuery, movieDetailsData, setMovieDetailsData, data, newMovies, englishMovies, hindiMovies, bollywoodMovies, hollywoodMovies }

    return (
        <AppContext.Provider value={ AllData }>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}