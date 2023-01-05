import React from 'react';
import { social } from '../../assets/db/data';
import './Footer.css';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_content">
          {social.map((item) => (
            <a className="icons" key={item.id} href={item.url} target="_blank">
              {item.icon}
            </a>
          ))}
          <p className="footer_copy">@COPY_Right / 2022 Kim geon ho</p>
        </div>
      </footer>
    </>
  );
};
