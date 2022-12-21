import React, { useState } from 'react';
import randingImg from '../../assets/images/info.jpg';
import { Link } from 'react-router-dom';
import './Randingpage.css';

export const Randingpage = () => {
  const [dark, setDark] = useState(false);

  const handelClick = () => {
    setDark(!dark);
  };

  return (
    <>
      <section className="randing section">
        <div className="container">
          <div
            className={dark ? 'left active' : 'left'}
          ></div>
          <div
            className={dark ? 'right active' : 'right'}
          ></div>
          <div className="content">
            <div
              className="top-img"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <img src={randingImg} alt="..." />
            </div>
            <div
              className="bottom-text"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-duration="1000"
              data-aos-delay="1200"
              data-aos-offset="0"
            >
              <h1 className="bottom_title">KIM GEON HO</h1>
              <span>PORT FOLIO</span>
            </div>

            <div className="start">
              <Link className="start_btn" to="/home" data-text="PORTFOLIO_GO">
                PORTFOLIO_GO
              </Link>
            </div>
          </div>
          <div
            className={dark ? 'toggle_btn active' : 'toggle_btn'}
            onClick={handelClick}
          >
            <span></span>
          </div>
        </div>
      </section>
    </>
  );
};
