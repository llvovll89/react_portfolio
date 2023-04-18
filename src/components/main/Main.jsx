import React, { useContext } from 'react';
import { mainHomeData } from '../../assets/db/data';
import { MdTouchApp } from 'react-icons/md';
import { DarkContext } from '../../context/darkContext';
import Typewriter from 'typewriter-effect';
import mainhomeIMG from '../../assets/images/hojjang.png';
import './Main.css';

export const Main = () => {
  const { darkMode } = useContext(DarkContext);
  const bgColor = darkMode ? '#a49494' : '#FFFFFF';
  const textColor = darkMode ? '#FFFFFF' : '#000';
  const btnBg = darkMode ? '#ffffff' : '#0f0f0f';

  return (
    <>
      <div className="main_container">
        <div
          className="main_content"
          style={{ background: bgColor, color: textColor }}
        >
          <div className="main_left flex_item">
            <div className="left_content">
              <p
                className="left_text"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                WELCOME TO MY PORTFOLIO
              </p>
              <h2
                className="left_big"
                data-aos="zoom-out"
                data-aos-duration="1000"
              >
                {mainHomeData.map((item) => (
                  <Typewriter
                    className="ani-title"
                    key={item.id}
                    options={{
                      strings: [`${item.name}`, `${item.post}`],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                ))}
              </h2>
              <p
                className="left_nomal"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span>" 항상 공부하고 발전하려고 노력하는</span>
                <span>
                  <span className="color">신입 프론트엔드 개발자 김건호</span>
                  &nbsp;입니다."
                </span>
              </p>
              <button
                href="#about"
                className="main_btn"
                data-aos="flip-left"
                data-aos-duration="1000"
                style={{ background: btnBg, color: darkMode ? "#000" : "#ffffff" }}
              >
                More Me
                <MdTouchApp />
              </button>
            </div>
          </div>
          <div
            className="right_content flex_item"
            style={{
              background: bgColor,
              transition: '0.4s all ease',
            }}
          >
            <div className="main_img">
              <img
                src={mainhomeIMG}
                alt="main_img"
                data-aos="zoom-out-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                style={{ background: darkMode ? '#f3fef3' : 'transparent' }}
              />
            </div>
          </div>
          <div
            className="logo_title"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <span>Front_end</span>
            <span>Developer</span>
          </div>
        </div>
      </div>
    </>
  );
};
