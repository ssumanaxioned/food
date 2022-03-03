import React from 'react'
import pizza1 from '../Assets/Images/pizza1.png';
import pizza2 from '../Assets/Images/pizza2.png';
import pizza3 from '../Assets/Images/pizza3.png';
import pizza4 from '../Assets/Images/pizza4.png';
import pizza5 from '../Assets/Images/pizza5.png';
import pizza6 from '../Assets/Images/pizza6.png';
import PriceContent from './PriceContent';

const Prices = () => {
  return (
    <div className='py-20 bg-white dark:bg-primary-alt'>
      <div className='wrapper'>
        <ul className='flex flex-wrap justify-between items-center'>
          <PriceContent image={pizza1} price={50} />
          <PriceContent image={pizza2} price={25} />
          <PriceContent image={pizza3} price={150} />
          <PriceContent image={pizza4} price={22} />
          <PriceContent image={pizza5} price={22} />
          <PriceContent image={pizza6} price={22} />
        </ul>
      </div>
    </div>
  )
}

export default Prices