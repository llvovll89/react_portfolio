import React from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AiFillGithub } from 'react-icons/ai';
import { VelogLink } from '../../../customStyled/styled';
import './ReactProject.css';

export const ReactCard = ({
  text = '',
  title = '',
  desc = '',
  imgUrl = '',
  link = '',
  github = '',
  contentLink = ''
}) => {
  return (
    <SplideSlide className="slide">
      <div className="react_content">
        <div className="react_left" data-aos="flip-left" data-aos-duration="1000">
          <span className="react_number">{text}</span>
          <h2 className="react_title">{title}</h2>
          <div className="desc_contents">
          {Array.isArray(desc) ? (
            desc.map((item, index) => (
              <p key={index} className="arr_desc">{item}</p>
            ))
          ) : (
            <p className="react_desc">{desc}</p>
          )}
          </div>
          <div className="link_btn">
            {link && (
              <a href={link} title="Project 보기" target="_blank" rel="noreferrer">
                More View
              </a>
            )}
            {github && (
              <a href={github} title="Github Code 보기" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            )}
          </div>
          {contentLink && (
            <VelogLink href={contentLink} target="_blank" rel="noreferrer">
              프로젝트 과정보기
            </VelogLink>
          )}
        </div>
        <div className="react_right" data-aos="flip-right" data-aos-duration="1000">
          <img src={imgUrl} alt="bookmark.." />
        </div>
      </div>
    </SplideSlide>
  );
};
