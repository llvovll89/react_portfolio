import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { asidenav, social } from '../../assets/db/data';
import './Aside.css';

export const Asidecontent = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={active ? 'aside show' : 'aside'}>
        <div className="aside-logo">
          <Link to="/">
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
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className="aside-nav"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          {asidenav.map((link) => (
            <li key={link.id}>
              <Link
                to={link.navurl}
                data-aos="fade-right"
                duration="1000"
                onClick={() => setActive(!active)}
              >
                <span className="link-icons">{link.navicon}</span>
                <span className="link-items"> {link.navtext}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="social">
          <div className="social-box">
            {social.map((item) => (
              <a href={item.url} key={item.id} target="_blank">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
