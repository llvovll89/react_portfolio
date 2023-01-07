import React from 'react';
import { backend } from '../../assets/db/data';
import { BackCard } from './BackCard';
import './Backend.css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const Backend = () => {
  return (
    <>
      <section className="backend section">
        <div className="backend-container container">
          <div className="row">
            <div
              className="section-title pad15"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <h2>MERN_STACK</h2>
            </div>
          </div>

          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '1.5rem',
              mediaQuery: 'max' ,
              breakpoints : {
                768: {
                  perPage: 1
                }
              }
            }}
          >
            {backend.map((item) => (
              <SplideSlide key={item.id} className="slide">
                <BackCard img={item.img} title={item.title} desc={item.desc} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </>
  );
};
