import React from 'react';
import Typewriter from 'typewriter-effect';
import { serviceData } from '../../assets/db/newDB';
import './Service.css';

export const Service = () => {
  return (
    <>
      <div className="service">
        <div className="service_container">
          <div className="service_content">
            {serviceData.map((item) => (
              <Typewriter
                className="ani-title"
                key={item.id}
                options={{
                  strings: [`${item.text}`, `${item.post}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
