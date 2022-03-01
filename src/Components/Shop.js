import React from 'react'
import Button from './Button'

const Shop = () => {
  return (
    <div className="bg-transparent py-20">
      <div className="wrapper">
        <div className="w-full md:w-3/5 lg:w-1/2 mx-auto flex-col justify-center items-center">
          <h1 className='mb-4 font-semibold leading-relaxed text-white text-3xl xl:text-4xl'>Free Delivery With PIZZA OF THE DAY Only 8.99 USD</h1>
          <Button content='Shop now' />
        </div>
      </div>
    </div>
  )
}

export default Shop