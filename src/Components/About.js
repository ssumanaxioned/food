import React from 'react'
import Button from './Button'
import pizza from '../Assets/Images/pizza.jpg'

const About = () => {

  return (
    <div className="py-20 bg-white dark:bg-primary-alt">
      <div className="wrapper">
        <div className="flex flex-wrap justify-between">
          <div className="basis-full md:basis-[45%] space-y-4">
            <span className='font-bold text-secondary-200 text-2xl dark:text-white xl:text-3xl'>About Us</span>
            <h3 className='font-bold text-secondary-300 dark:text-white text-3xl xl:text-4xl'>WELCOME TO MAESTRO PIZZINI</h3>
            <p className='font-light text-secondary-100 dark:text-white text-base xl:text-lg'>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            <Button content='Read more' />
          </div>
          <div className="mt-5 md:mt-0 md:basis-1/2">
            <img src={pizza} alt="Pizza" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About