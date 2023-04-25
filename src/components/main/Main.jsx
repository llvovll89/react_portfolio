import React, { useContext } from 'react';
import { DarkContext } from '../../context/darkContext';
import Typewriter from 'typewriter-effect';
import './Main.css';

export const Main = () => {
  const { darkMode } = useContext(DarkContext);

  return (
    <>
      <main className={darkMode ? 'main dark' : 'main'}>
        <section className="main_container">
          <div
            className="main_item"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1 className="text">Hi, my name is</h1>
          </div>
          <div className="main_item">
            <h2 className="big_text text">Gunho Kim</h2>
          </div>
          <div
            className="main_item"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <Typewriter
              className="text"
              options={{
                strings: [
                  `제 포트폴리오에 방문해 주셔서 감사합니다.`,
                  `
                    Thanks for Visiting My Portfolio.`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div
            className="main_item"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <p>
              저는 커뮤니케이션을 잘하고 밝은 에너지를 가진
              <span className="salmon"> 프론트엔드 개발자 </span>
              입니다. 보다 나은 내일을 위해 끊임없이 발전 할 것 입니다! 보시고
              마음에 드시면{' '}
              <a className="salmon" href="#contact">
                Contact
              </a>{' '}
              해주세요.
            </p>
          </div>
          <div
            className="main_item"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <a href="#about" className="btn">
              More View
            </a>
          </div>

          <div
            className="logo_title"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <span>Front_end</span>
            <span>Developer</span>
          </div>
        </section>
      </main>
    </>
  );
};
