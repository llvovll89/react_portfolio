import React, { useContext } from 'react';
import './ReactProject.css';
import { dataNew } from '../../../assets/db/newDB';
import { ReactCardForm } from './ReactCardForm';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { UseContext } from '../../../context/useContext';

export const ReactProject = () => {
  const [darkMode] = useContext(UseContext);

  return (
    <>
      <div
        className="react_container"
        style={{
          background: darkMode ? '#181818' : '#FFF',
          color: darkMode ? '#FFFFFF' : '#272626',
          borderTop: '1px solid rgba(255,255,255,0.32)',
          transition: '0.4s all linear',
        }}
      >
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
