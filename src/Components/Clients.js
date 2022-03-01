import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const Clients = () => {

  const list = [
    {
      id: 1,
      count: 120,
      title: 'Awesome Employees',
    },
    {
      id: 2,
      count: 120,
      title: 'Pizza Types',
    },
    {
      id: 3,
      count: 14868,
      title: 'Satisfied Clients',
    },
    {
      id: 4,
      count: 2031,
      title: 'Delivery',
    },

  ]

  const [loading, setLoading] = useState(true);

  const onEnd = () => { setLoading(false); }

  return (
    <div className="py-20">
      <div className="wrapper">
        <ul className="flex flex-wrap justify-between items-center text-center text-white">
          {
            list.map(item => (
              <ReactVisibilitySensor key={item.id} partialVisibility active={loading} offset={{ top: 20 }}>
                {
                  ({ isVisible }) => (
                    <li className="basis-1/2 mb-4 md:basis-1/5" key={item.id}>
                      {isVisible ? <CountUp start={0} end={item.count} onEnd={onEnd} duration={2} className="font-medium text-4xl xl:text-5xl" /> : null}
                      <p className="text-base xl:text-lg">{item.title}</p>
                    </li>
                  )
                }
              </ReactVisibilitySensor>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Clients;