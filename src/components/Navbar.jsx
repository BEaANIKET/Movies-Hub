import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickThreeDot = () => {
    setIsOpen(!isOpen);
  }

  const navItem = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Movies',
      link: '/movie'
    },
    {
      name: 'Series',
      link: '/series'
    },
  ]

  return (
    <>
      <div className='  z-20 sticky top-0 pt-3 pb-3 flex justify-between items-center w-full bg-black text-white h-fit md:flex md:justify-between '>
        <div className=' md:ml-4 flex items-center gap-0'>
          <ion-icon name="videocam"></ion-icon>
          <div className=' overflow-hidden h-[50px] w-[150px] flex justify-center items-center'>
            <img className=' h-full scale-[2.5]' src={logo} alt="" />
          </div>
        </div >
        <div>
          <SearchBar />
        </div>
        <div className={`bg-black md:flex md:gap-4 w-full mt-16 md:mt-0 md:w-fit text-xl md:mr-4 transition-all duration-100 ease-in absolute md:static z-[-1] md:z-10 pb-10 md:pb-0 ${isOpen ? " top-0" : " top-[-400px]"}`} >
          {
            navItem.map((item) => (
              <li className=' cursor-auto w-full md:w-fit flex mt-6 md:mt-0   justify-center text-white list-none ' key={item.name}>
                <NavLink
                  to={item.link}
                  style={({ isActive }) => {
                    return isActive ? { color: "plum" } : {};
                  }}
                  key={item.name}
                  className=' w-fit  hover:text-blue-500 transition-colors'> {item.name} </NavLink>
              </li>
            ))
          }

        </div>

        <div onClick={handleClickThreeDot} className=' cursor-pointer md:hidden flex justify-center items-center'>
          <ion-icon size="large" name="ellipsis-vertical-outline"></ion-icon>
        </div>

      </div>
    </>
  )
}

