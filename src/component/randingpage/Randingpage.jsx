import React, { useState } from 'react';
import randingImg from '../../assets/images/aisdeImg.png';
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
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="500"
            className={dark ? 'left active' : 'left'}
          ></div>
          <div
            className={dark ? 'right active' : 'right'}
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="500"
          ></div>
          <div className="content">
            <div
              className="top-img"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              <img src={randingImg} alt="..." />
            </div>
            <div
              className="bottom-text"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="1300"
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
