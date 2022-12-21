import React from 'react';
import { backend } from '../../assets/db/data';
import { BackCard } from './BackCard';
import './Backend.css';

// slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Backend = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

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

            <div className="back-content">
              <Slider {...settings}>
                {backend.map((item) => (
                  <BackCard
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                    desc={item.desc}
                  />
                ))}
              </Slider>
            </div>
          </div>

      </section>
    </>
  );
};
