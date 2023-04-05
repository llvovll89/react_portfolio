import React from 'react';
import './ReactProject.css';

import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { VelogLink } from '../../../customStyled/styled';

import {
  AiFillGithub
} from 'react-icons/ai';

export const ReactCardForm = ({
  text,
  title,
  desc,
  imgUrl,
  link,
  github,
  icons,
  velog,
}) => {
  return (
    <SplideSlide className="slide">
      <div className="react_content" title="next project (right swipe)">
        <div
          className="react_left"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <span className="react_number">{text}</span>
          <h2 className="react_title">{title}</h2>
          <p className="react_desc">{desc}</p>
          <span className="react_icons">{icons}</span>
          <div className="link_btn">
            <a href={link} title="Project 보기" target="_blank" rel="noreferrer">
              More View
            </a>
            <a href={github} title="Github Code 보기" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
          </div>
          <VelogLink href={velog} target="_blank" rel="noreferrer">
            프로젝트 과정보기
          </VelogLink>
        </div>
        <div
          className="react_right"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <img src={imgUrl} alt="bookmark.." />
        </div>
      </div>
    </SplideSlide>
  );
};
