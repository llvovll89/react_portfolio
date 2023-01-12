import React from 'react';
import { reactProject } from '../../../assets/db/data';
import { VanilaJs } from './VnilaJs';
import './Vanilajs.css';

import '@splidejs/splide/dist/css/splide.min.css';

export const VanilaJsProject = () => {
  return (
    <>
      <section className="react-project section hidden">
        <div className="react-project-container container">
          <div className="row">
            <div
              className="section-title pad15"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <h2>Vanila_Js</h2>
            </div>
          </div>

          <div className="react-content">
            {reactProject.map((item) => (
              <VanilaJs
                key={item.id}
                image={item.image}
                category={item.category}
                totallike={item.totalLike}
                title={item.title}
                desc={item.desc}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
