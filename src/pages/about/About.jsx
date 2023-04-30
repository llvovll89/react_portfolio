import React, { useContext } from 'react';
import './About.css';
import { DarkContext } from '../../context/darkContext';
import AboutImage from '../../assets/images/about.png';

const About = () => {
  const darkMode = useContext(DarkContext);
  const isLoaderInfo = window.innerWidth >= 768;

  return (
    <section className={`about ${!darkMode.darkMode && 'dark'}`} id="about">
      <div className="about_container">
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
                    &nbsp;새로운 기술을 배우는것에 흥미가있는 개발자{' '}
                    <span className="salmon">김건호</span> 입니다.
                  </p>
                  <p>
                    &nbsp;현재 사용하고 있는 기술로는 React.js 이고 프론트엔드
                    개발 성장을 위해 각종 라이브러리와 스킬들을 공부하고
                    있습니다.
                  </p>
                  <p>
                    &nbsp;열심히 하는 개발자가 되기보단 잘하는 개발자가 되기
                    위해서 노력하겠습니다.
                  </p>
                </div>
              ) : (
                <div
                  className="info"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <p>
                    오늘보단 내일이 더 나은 개발자가 되기 위해 노력하는
                    <span className="salmon">김건호</span> 입니다
                  </p>

                  <p>
                    현재 React.js를 이용해 프로젝트들을 만들어 보고 있고,
                    프론트엔드 개발의 기술력을 위해 노력하고 있습니다.
                  </p>
                  <p>
                    &nbsp;열심히 하는 개발자가 되기보단 잘하는 개발자가 되기
                    위해서 노력하겠습니다.
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
              <img src={AboutImage} alt="AboutImage.." loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
