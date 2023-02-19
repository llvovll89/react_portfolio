import React from 'react';
import './ReactProject.css';

export const ReactCardForm = ({ text, title, desc, imgUrl, link, github , icons }) => {
  return (
    <>
      <div className="react_content">
        <div
          className="react_left"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <span className="react_number">{text}</span>
          <h2 className="react_title">{title}</h2>
          <p className="react_desc">{desc}</p>
          <span className="react_icons">
              {icons}
          </span>
          <div className="link_btn">
            <a href={link} target="_blank" rel="noreferrer">
              VIEW
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              CODE
            </a>
          </div>
        </div>
        <div
          className="react_right"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <img src={imgUrl} alt="bookmark.." />
        </div>
      </div>
    </>
  );
};
