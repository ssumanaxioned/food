import React from 'react'
import Button from './Button'
import pizza from '../Assets/Images/pizza.jpg'

const Menu = () => {
  return (
    <div className="py-20 bg-white dark:bg-primary-alt">
      <div className="wrapper">
        <div className="flex flex-wrap justify-between">
          <div className="basis-full mb-5 md:m-0 md:basis-1/2">
            <img src={pizza} alt="Pizza" />
          </div>
          <div className="basis-full md:basis-[45%] space-y-4">
            <span className='font-bold text-secondary-200 text-2xl dark:text-white xl:text-3xl'>The Pizza Menu</span>
            <h5 className='font-bold text-secondary-300 text-3xl dark:text-white xl:text-4xl'>CHICAGO THIN CRUST</h5>
            <p className='font-light text-secondary-100 text-base dark:text-white xl:text-lg'>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            <Button content='Read more' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu