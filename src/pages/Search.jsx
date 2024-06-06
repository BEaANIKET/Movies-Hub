import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { getDataApi } from '../getData/GetData';
import { useAppContext } from '../context/AppContext';
import { DisplayHomeMovie } from '../components/DisplayHomeMovie';
import Footer from '../components/Footer';

export const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchQuery } = useAppContext();

  useEffect(() => {
    const fetchData = async (q) => {
      setLoading(true);
      setError(null);

      try {
        const temp = await getDataApi(q);
        if (temp.Response === "False") {
          setError(temp.Error);
          setData([]);
        } else {
          setData(temp.Search || []);
          console.log(data);
        }
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        setData([]);
      } finally {
        setLoading(false);

      }
    };

    const debounceFetch = setTimeout(() => {
      if (searchQuery) {
        fetchData(searchQuery);
      }
    }, 2000);

    return () => clearTimeout(debounceFetch);
  }, [searchQuery]);

  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <div className="p-4 text-white">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && data.length === 0 && <p>No results found</p>}
        {data.length > 0 && <DisplayHomeMovie Data={data} />}
      </div>
      <Footer />
    </div>
  );
};
