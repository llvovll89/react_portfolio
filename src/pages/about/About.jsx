import React, { useContext } from 'react';
import './About.css';
import { DarkContext } from '../../context/darkContext';
import AboutImage from '../../assets/images/AboutImage.png';

const About = () => {
  const darkMode = useContext(DarkContext);
  const isLoaderInfo = window.innerWidth >= 768;

  return (
    <section className={`about ${!darkMode.darkMode && 'dark'}`} id="about">
      <div className="abouts_container">
        <h2
          className="about_title"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <span>01.</span> About Me
        </h2>
        <div className="about_content">
          <div className="left">
            <div className="items">
              {isLoaderInfo ? (
                <div
                  className="info"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <p>
                     저는 항상 발전하려고 노력하는 프론트엔드
                    개발자입니다.
                  </p>
                  <p>
                    현재 사용하고 있는 기술로는 React.js 이고 프론트엔드 개발
                    성장을 위해 각종 라이브러리와 스킬들을 공부하고 있습니다.
                  </p>
                  <p>
                    제가 지향하는 개발자로서의 면모는 사용자 입장에서 성능과,
                    사용성이 좋은 웹사이트를 개발하는 개발자가 되고 싶습니다.
                  </p>
                </div>
              ) : (
                <div
                  className="info"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <p>
                    저는 오늘보단 내일이 더 나은 개발자가 되기 위해
                    노력하는 프론트엔드 개발자입니다.
                  </p>

                  <p>
                    현재 React.js를 이용해 프로젝트들을 만들어 보고 있고,
                    프론트엔드 개발의 기초를 잡기 위해 노력하고 있습니다.
                  </p>
                  <p>
                    웹개발에 필요한 CS지식, 알고리즘, 자료구조도 준비하여 좋은
                    개발자가 되고 싶습니다!
                  </p>
                </div>
              )}

              <div>
                <p className="skill_title info">My Skill</p>
                <ul className="skills">
                  <li data-aos="zoom-in-right" data-aos-duration="1000">
                    Javascript(es6)
                  </li>
                  <li data-aos="zoom-in-left" data-aos-duration="1000">
                    React.js
                  </li>
                  <li data-aos="zoom-in-right" data-aos-duration="1000">
                    Redux
                  </li>
                  <li data-aos="zoom-in-left" data-aos-duration="1000">
                    Node.js
                  </li>
                  <li data-aos="zoom-in-right" data-aos-duration="1000">
                    git
                  </li>
                  <li data-aos="zoom-in-left" data-aos-duration="1000">
                    mongoDB
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <div
              className="right_img"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img src={AboutImage} alt="AboutImage.." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
