import React from 'react'

const PriceContent = ({ image, price }) => {
  return (
    <>
      <li className='sm:basis-[48%] md:basis-[45%] xl:basis-[30%] mb-5 space-y-4 text-center xl:space-y-5'>
        <figure>
          <img className='w-3/5 xl:w-4/5 mx-auto' src={image} alt="pizza" />
        </figure>
        <h1 className="font-bold text-xl xl:text-2xl">Pizza Margeritta</h1>
        <p className="font-light text-base xl:text-lg text-[#88888]">
          Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
          ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
          risus, vel hendrerit dui tempor in.
        </p>
        <p className="text-2xl xl:text-3xl">${price}</p>
      </li>
    </>
  )
}

export default PriceContent