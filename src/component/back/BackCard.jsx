import React from 'react';
import './Backend.css';

export const BackCard = (props) => {
  return (
    <>
      <div className="back-card" data-aos="flip-left" data-aos-duration="1000">
        <div className="back-card-content">
          <p>{props.title}</p>
          <img src={props.img} alt="..." />
          <p>{props.desc}</p>
          <div className="back_card_btn">
            <a href="#" target="_blank" className='fir'>
              DEMO
            </a>
            <a href="#" target="_blank" className='sec'>
              GIT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
