import React, { useContext } from 'react';
import randingImg from '../../assets/images/aisdeImg.png';
import { Link } from 'react-router-dom';
import { DarkContext } from '../../context/darkContext';
import './Randingpage.css';

export const Randingpage = () => {
  const { darkMode } = useContext(DarkContext);
  const bgColor = darkMode ? '#1B1B1F' : '#FFFFFF';
  const textColor = darkMode ? '#FFF' : '#000';

  return (
    <>
      <section className="randing">
        <div className="randing_container">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="left"
            style={{ background: bgColor }}
          ></div>
          <div
            className="right"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            style={{ background: bgColor }}
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
            <div className="bottom-text" style={{ color: textColor }}>
              <h1 className="bottom_title">WELCOME TO MY</h1>
              <span>PORTFOLIO</span>
            </div>

            <div className="start">
              <Link className="start_btn" to="/home" data-text="PORTFOLIO_GO">
                포트폴리오로 이동
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
