import React from 'react';
import { Card } from './Card';
import { data } from 'autoprefixer';

export const DisplayHomeMovie = ({ Data }) => {
  return (
    <div className='w-full flex flex-wrap md:px-7 px-0'>
      {
        Data.length !== 0 ? (
          Data.map((item, index) => (
            <Card key={index} item = {item} />
          ))
        ) : (
          <p className='text-center w-full text-gray-500'>No movies to display</p>
        )
      }
    </div>
  );
};
