// src/components/SearchBar.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export const SearchBar = () => {

  const { searchQuery, setSearchQuery} = useAppContext()

  return (
    <>
      <NavLink to={'/search'}>
        <div className="relative text-gray-600">
          <input
            type="search"
            name="search"
            placeholder="Search"
            value={ searchQuery }
            onChange={ (e) => setSearchQuery(e.target.value) }
            className="bg-white border-black border-2 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full sm:w-64 lg:w-96"
          />
          <button type="submit" className=" text-2xl font-bold absolute right-0 top-0 mt-3 mr-4">
            <FaSearch />
          </button>
        </div>

      </NavLink>

    </>

  );
}

