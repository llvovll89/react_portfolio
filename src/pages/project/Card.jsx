import React, { useContext } from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import { DarkContext } from '../../context/darkContext';
import '@splidejs/splide/dist/css/splide.min.css';
import './Project.css';

export const Card = ({
  text = '',
  title = '',
  subtitle = '',
  skill = '',
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
      <div className="react_content" style={{background: darkMode ? "#262626" : "#FEFEFE"}}>
        <div
          className="react_left"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <span className="react_number">{text}</span>
          <div className="title">
          <h2 className="react_title">{title}</h2>
          <span className='react_subtitle'>{subtitle}</span>
          </div>
          <div className="react_skills">
          <p className='content_title'>{'<사용기술 & 언어>'}</p>
          <div className="skill_arr">
          {Array.isArray(skill) ? (
            skill.map((item, index) => (
              <span key={index} className='skill'>{item}</span>
            ))
          ) : null}
          </div>
          </div>
          <div className="desc_contents">
            <p className='content_title'>{"<개발내용>"}</p>
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
