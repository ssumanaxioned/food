import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className="w-full h-screen bg-banner bg-fixed bg-cover bg-no-repeat">
      <div className='wrapper relative'>
        <div className='h-screen flex items-center'>
          <div className='w-full sm:w-9/12 lg:w-8/12 xl:w-2/4 text-white space-y-6'>
            <span className='font-bold text-2xl md:text-3xl xl:text-5xl'>Pizza Delivery</span>
            <h2 className='font-extrabold first-letter:text-red text-4xl md:text-5xl xl:text-7xl'>MASTERO PIZINNE</h2>
            <p className='text-base md:text-xl xl:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error dolorum labore.</p>
            <Button content='Delivery now' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header