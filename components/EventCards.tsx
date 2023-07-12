"use client";

import React, {useEffect, useRef} from 'react'
import VanillaTilt from 'vanilla-tilt';

import "styles/globals.css";


// de un JSON con toda la data de los eventos tengo que pasarlo a los cards

// VanillaTilt is a smooth 3D glare effect
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const EventCards = () => {

  // VanillaTilt effect options
  const options = {
    max: 25,
    speed: 400,
    glare: true,
  };


  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 pt-28 px-8 sm:px-12 md:px-16 md:gap-7 ">

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/bnp-sven-vath-feed.jpg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/bnp-mahony-feed.jpg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/svg-innellea-feed.jpeg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/flama-khen-feed.jpg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/habitat-amonita-feed.jpg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/habitat-dannyhowells-feed.jpg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/habitat-kasperkoman-feed.jpg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/habitat-luke-fair-feed.jpg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/ladob-hotsince-feed.jpg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/ladob-jameszabiela-feed.jpg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/ladob-missmonique-feed.jpg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

      <Tilt className="rounded-[15px] card" options={options}>
          <img src="/assets/images/event-cards/svg-mihai-feed.jpg" alt="slide_image" className='card-img'/>
          <div className='card-body'>
            <div className='card-content'>
              <h3>Sven Vath</h3>
              <p>Jueves 13/07/23</p>
              <p>21:00 hs</p>
              <p>Palacio Alsina</p>
            </div>
          </div>
      </Tilt>

    </div>


  )
}

export default EventCards