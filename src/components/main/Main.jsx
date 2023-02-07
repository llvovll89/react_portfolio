import React, { useContext } from 'react';
import { mainhome } from '../../assets/db/data';
import { MdTouchApp } from 'react-icons/md';
import { UseContext } from '../../context/useContext';
import Typewriter from 'typewriter-effect';
import mainhomeIMG from '../../assets/images/hojjang.png';
import './Main.css';

export const Main = () => {
  const [darkMode] = useContext(UseContext);

  return (
    <>
      <section
        className="section_main"
        style={{
          background: darkMode ? '#1A1819' : '#FFEFFF',
          color: darkMode ? '#FFFFFF' : '#121111',
          transition: '0.4s all ease',
        }}
      >
        <div className="main_container">
          <div className="main_content">
            <div
              className="main_left flex_item"
              style={{
                background: darkMode ? '#1A1819' : '#EFFEFF',
                color: darkMode ? '#FEFFFE' : '#121111',
              }}
            >
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
                  {mainhome.map((item) => (
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
                  <span>" 꿈의 프로젝트를 실현하기 위해 증진하는</span>
                  <span>
                    <span className="color">신입 프론트엔드 개발자 김건호</span>
                    &nbsp;입니다."
                  </span>
                </p>
                <a
                style={{
                  background : darkMode ? "#F3FFFF" : "#121212",
                  color: darkMode ? "#000" : "#FFFFFF"
                }}
                  href="#about"
                  className="main_btn"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  More Me
                  <span>
                    <MdTouchApp />
                  </span>
                </a>
              </div>
            </div>
            <div
              className="right_content flex_item"
              style={{
                background: darkMode ? '#1A1819' : '#FFFFFF',
                transition: '0.4s all ease',
              }}
            >
              <img
                src={mainhomeIMG}
                alt="main_img"
                className="main_img"
                data-aos="zoom-out-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                style={{ background: darkMode ? 'transparent' : 'transparent' }}
              />
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
      </section>
    </>
  );
};
