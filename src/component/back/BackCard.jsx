import React from 'react';
import './Backend.css';

export const BackCard = (props) => {
  return (
    <>
      <div className="back-card">
        <img src={props.img} alt="..." />
          <div className="back-card-text">
            <p>{props.title}</p>
            <p>{props.desc}</p>
            <div className="back_card_btn">
                <a href="#" target='_blank'>DEMO</a>
                <a href="#" target='_blank'>GIT</a>
            </div>
            </div>
      </div>
    </>
  );
};
