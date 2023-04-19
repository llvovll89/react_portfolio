import React, { useContext } from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import { DarkContext } from '../../../context/darkContext';
import '@splidejs/splide/dist/css/splide.min.css';
import './ReactProject.css';

export const ReactCard = ({
  text = '',
  title = '',
  desc = '',
  imgUrl = '',
  link = '',
  github = '',
  contentLink = '',
}) => {
  const { darkMode } = useContext(DarkContext);

  const btnStyle = {
    background: darkMode ? '#FFFFFF' : 'rgb(5, 3, 6)',
    color: darkMode ? 'rgba(5,3,6)' : '#FFFFFF',
  };

  return (
    <SplideSlide className="slide">
      <div className="react_content">
        <div
          className="react_left"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <span className="react_number">{text}</span>
          <h2 className="react_title">{title}</h2>
          <div className="desc_contents">
            {Array.isArray(desc) ? (
              desc.map((item, index) => (
                <p key={index} className="arr_desc">
                  {item}
                </p>
              ))
            ) : (
              <p className="react_desc">{desc}</p>
            )}
          </div>
          <div className="link_btn">
            {link && (
              <a
                href={link}
                title="Project 보기"
                target="_blank"
                rel="noreferrer"
                style={btnStyle}
              >
                More View
              </a>
            )}
            {github && (
              <a
                href={github}
                title="Github Code 보기"
                target="_blank"
                rel="noreferrer"
                style={btnStyle}
              >
                Code보기
              </a>
            )}
          </div>
          {contentLink && (
            <div className="link_btn velog">
              <a
                href={contentLink}
                target="_blank"
                style={btnStyle}
                rel="noreferrer"
              >
                프로젝트 과정보기
              </a>
            </div>
          )}
        </div>
        <div
          className="react_right"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <img src={imgUrl} alt="bookmark.." loading="lazy" />
        </div>
      </div>
    </SplideSlide>
  );
};
