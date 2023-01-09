import React from 'react';
import { backend } from '../../assets/db/data';
import { BackCard } from './BackCard';
import './Backend.css';
import { FaArrowsAltH } from 'react-icons/fa';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const Backend = () => {
  return (
    <>
      <section className="backend section">
        <div className="backend-container container">
        <div className="row">
        <div
          className="section-title back_title pad15"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <h2>BACK_END</h2>
        </div>
        </div>
        <div className="hover_mouse">
          <span>옆으로</span>
          <span>밀어주세요</span>
          <span><FaArrowsAltH /></span>
        </div>

          <Splide
            options={{
              perPage: 2,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '2rem',
              mediaQuery: 'max' ,
              breakpoints : {
                768: {
                  perPage: 1
                }
              }
            }}s
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
