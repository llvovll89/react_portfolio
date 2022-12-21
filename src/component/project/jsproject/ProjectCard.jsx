import React from 'react';
import { AiFillGithub, AiFillDownCircle } from 'react-icons/ai';
import './Project.css';

export const ProjectCard = ({ icons, title, imgurl, demo, git , desc , subtitle}) => {
  
  return (
    <>
      <div
        className="project-contetnt pad15"
        data-aos="fade-in"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <div className="project-item-in ">
          <div className="project-icons">{icons}</div>
          <h4>{title}</h4>
          <div className="js_imgbox">
            <img src={imgurl} alt=",,," />
            <div className="project-overlay">
                <div className="overlay-content">
                <span>{subtitle}</span>
                <p>{desc}</p>
                </div>
            </div>
          </div>
          <div className="project-links">
            <a href={demo} className="link-btn" target="blank">
              <span>DEMO</span>
              <AiFillDownCircle className="pro-icons" />
            </a>
            <a href={git} className="link-btn" target="blank">
              <span>CODE</span>
              <AiFillGithub className="pro-icons" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
