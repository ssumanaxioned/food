import React, { useState } from 'react'
import logo from '../Assets/Images/logo.png';
import { HiMenuAlt1 } from 'react-icons/hi';
import { BiSun } from 'react-icons/bi';
import { BsMoon } from 'react-icons/bs'

const Navbar = ({ darkMode, handleMode }) => {

  const [color, setColor] = useState(false);
  const [active, setActive] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <nav className={`sticky top-0 left-0 w-full z-10 duration-1000 ${color ? 'bg-black' : ''}`}>
      <div className='wrapper'>
        <div className="py-4 flex justify-between items-center">
          <h1 className="basis-2/5 md:basis-1/3 xl:basis-1/4">
            <a href="#FIXME" title='Logo'>
              <img src={logo} alt="logo" />
            </a>
          </h1>
          <HiMenuAlt1 className='fill-white text-3xl md:hidden' onClick={() => { setActive(!active) }} />
          <ul className={`${active ? 'opacity-100' : 'opacity-0'} w-full py-5 absolute top-full left-0 space-y-5 bg-black text-center text-base duration-1000 md:bg-transparent md:space-y-0 md:static md:opacity-100 md:flex md:basis-9/12 xl:basis-3/5 md:justify-end md:space-x-6`}>
            <li>
              <a className='font-semibold uppercase text-white lg:hover:text-primary' href="#FIXME" title='Home' target="_self">Home</a>
            </li>
            <li>
              <a className='font-semibold uppercase text-white lg:hover:text-primary' href="#FIXME" title='Menu' target="_self">Menu</a>
            </li>
            <li>
              <a className='font-semibold uppercase text-white lg:hover:text-primary' href="#FIXME" title='Shop' target="_self">Shop</a>
            </li>
            <li>
              <a className='font-semibold uppercase text-white lg:hover:text-primary' href="#FIXME" title='News' target="_self">News</a>
            </li>
            <li>
              <a className='font-semibold uppercase text-white lg:hover:text-primary' href="#FIXME" title='Contact' target="_self">Contact</a>
            </li>
            <li>
              <button className='text-white' onClick={handleMode}>
                {darkMode ? <BsMoon title='Activate lightmode' /> : <BiSun title='Activate darkmode' />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar