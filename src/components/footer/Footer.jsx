import React from 'react';
import { social } from '../../assets/db/data';
import './Footer.css';

export const Footer = () => {

  return (
    <>
      <footer className="footer">
        <div
          className="footer_content"
        >
          {social.map((item) => (
            <a
              className="icons"
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
          <p className="footer_copy">Copyright ©2023 All rights reserved</p>
          <span className="footer_subtext">
            🙌 이 사이트는 Chrome 브라우저에 최적화 되어 있습니다.
          </span>
        </div>
      </footer>
    </>
  );
};
