import React from 'react';
import './BackProject.css';
import { dataNew } from '../../assets/db/newDB';
import { ProCard } from './ProCard';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const BackProject = () => {
  return (
    <>
      <div className="pro_container">
        <div className="pro_wrap">
          <Splide
            options={{
              perPage: 1,
              arrows: false,
              pagination: false,
              gap: '6rem',
              drag: 'free',
              focus  : 'center',
            }}
          >
            {dataNew.map((item) => (
              <SplideSlide key={item.id} className="slide">
                <ProCard
                  title={item.title}
                  desc={item.desc}
                  imgUrl={item.imgUrl}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};
