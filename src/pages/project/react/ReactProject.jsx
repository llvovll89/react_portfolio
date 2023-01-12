import React from 'react';
import './ReactProject.css';
import { dataNew } from '../../../assets/db/newDB';
import { ReactCardForm } from './ReactCardForm';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const ReactProject = () => {
  return (
    <>
      <div className="react_container">
      <div className="react_wrap">
          <Splide
            options={{
              perPage: 1,
              arrows: false,
              pagination: false,
              gap: '6rem',
              drag: 'free',
              focus: 'center',
            }}
          >
            {dataNew.map((item) => (
              <SplideSlide key={item.id} className="slide">
                <ReactCardForm
                  text={item.text}
                  title={item.title}
                  desc={item.desc}
                  imgUrl={item.imgUrl}
                  link={item.link}
                  github={item.github}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};
