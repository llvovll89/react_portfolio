import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { navItem, social } from '../../assets/db/data';
import { DarkContext } from '../../context/darkContext';
import './Navbar.css';

export const Navbar = () => {
  const border = window.document.querySelectorAll('.border');
  border.forEach((a) => {
    a.addEventListener('click', () => {
      border.forEach((b) => {
        b.classList.remove('bt');
      });
      a.classList.add('bt');
    });
  });

  const [active, setActive] = useState(false);
  const { darkMode } = useContext(DarkContext);
  const bgColor = darkMode ? '#FFFFFF' : '#231f20';
  const toggleColor = darkMode ? "rgb(5,3,6)" : "#FFFFFF";
  const titleColor = darkMode ? "#231f20" : "#FFFFFF";

  return (
    <>
    <div className={`aside ${active ? 'show' : ''}${darkMode ? ' dark' : ''}`} style={{ background : bgColor }}>
        <div className="aside-logo">
          <Link to="/" title="Home 으로.." style={{color: titleColor}}>
            <span>FRONT_END</span>
            <br />
            <span data-aos="fade-left" duration="1000">
              DEVELOPER
            </span>
          </Link>
        </div>
        <div
          className={active ? 'aside-toggle active' : 'aside-toggle'}
          onClick={() => setActive(!active)}
          style={{
            background: bgColor,
          }}
        >
          <span style={{ background : toggleColor }}></span>
          <span style={{ background : toggleColor }}></span>
          <span style={{ background : toggleColor }}></span>
        </div>
        <ul
          className="aside-nav"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          {navItem.map((link) => (
            <li key={link.id} className="border">
              <Link
                to={link.navurl}
                data-aos="fade-right"
                duration="1000"
                onClick={() => setActive(!active)}
              >
                <span className="link-icons" style={{color: toggleColor}}>{link.navicon}</span>
                <span className="link-items" style={{color: toggleColor}}> {link.navtext}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="social">
          <div className="social-box">
            {social.map((item) => (
              <a href={item.url} key={item.id} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
