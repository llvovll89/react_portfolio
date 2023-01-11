import React from 'react';
import './BackProject.css';

import { AiFillHtml5 } from 'react-icons/ai';
import { FaArrowsAltH } from 'react-icons/fa';
import { DiCss3, DiJavascript1 } from 'react-icons/di';

export const ProCard = ({ title, desc, imgUrl }) => {
  return (
    <>
      <div className="pro_content">
        <div className="pro_left">
          <h2 className="pro_title">{title}</h2>
          <p className="pro_desc">{desc}</p>
          <span className="pro_icons">
            <AiFillHtml5 />
            <DiCss3 />
            <DiJavascript1 />
          </span>
          <div className="link_btn">
            <a href="#">VIEW</a>
            <a href="#">CODE</a>
          </div>
        </div>
        <div className="pro_right">
          <img src={imgUrl} alt="bookmark.." />
          <div className="pro_left_right">
          <span>옆으로</span>
          <span>밀어주세요</span>
          <span>
            <FaArrowsAltH />
          </span>
        </div>
        </div>
      </div>
    </>
  );
};
