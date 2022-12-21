import React from 'react'
import { reactProject } from '../../../assets/db/data';
import { ReactCard } from './ReactCard';
import './ReactProject.css';

export const ReactProject = () => {
  return (
    <>
      <section className='react-project section hidden'>
        <div className="react-project-container container">
          <div className="row">
          <div className="section-title pad15" data-aos="zoom-in" data-aos-duration="800">
          <h2>REACT-PROJECT</h2>
        </div>
          </div>

          <div className="react-content">
            {reactProject.map((item) => (
              <ReactCard 
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
  )
}

