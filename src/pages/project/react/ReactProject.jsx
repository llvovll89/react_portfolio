import React, { useContext } from 'react';
import { reactDB } from '../../../assets/db/reactData';
import { ReactCardForm } from './ReactCardForm';
import './ReactProject.css';

import { UseContext } from '../../../context/useContext';

// splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const ReactProject = () => {
  const { darkMode } = useContext(UseContext);
  
  return (
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
          {reactDB.map((item) => (
            <ReactCardForm
              key={item.id}
              text={item.text}
              title={item.title}
              desc={item.desc}
              imgUrl={item.imgUrl}
              link={item.link}
              github={item.github}
              icons={item.icons}
              velog={item.contetnLink}
            />
          ))}

        </Splide>
      </div>
    </div>
  );
};
