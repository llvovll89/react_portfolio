import React from 'react';

export const AboutItem = ({title, info}) => {
  return (
    <>
      <div className="info-item pad15" data-aos="zoom-out" data-aos-duration="800">
        <p>
          {title} : <span>{info}</span>
        </p>
      </div>
    </>
  );
};
