import React from 'react';
import { mainhome } from '../../assets/db/data';
import { Link } from 'react-router-dom';
import { MdTouchApp } from 'react-icons/md';
import Typewriter from 'typewriter-effect';
import mainhomeIMG from '../../assets/images/mainHo.jpg';
import './Main.css';

export const Main = () => {
  return (
    <>
      <section className="section_main">
        <div className="main_container">
          <div className="main_content">
            <div className="main_left flex_item">
              <div className="left_content">
                <p
                  className="left_text"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  WELCOME TO MY PORTFOLIO
                </p>
                <h2
                  className="left_big"
                  data-aos="zoom-out"
                  data-aos-duration="1500"
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
                  <span> <span className='color'>신입 프론트엔드 개발자 김건호</span> 입니다."</span>
                </p>
                <Link
                  to="/contact"
                  className="main_btn"
                  data-aos="zoom-out-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  More Me
                  <span>
                    <MdTouchApp />
                  </span>
                </Link>
              </div>
            </div>
            <div className="right_content flex_item">
              <img
                src={mainhomeIMG}
                alt="main_img"
                className="main_img"
                data-aos="zoom-out-up"
                data-aos-duration="1000"
                data-aos-delay="500"
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
