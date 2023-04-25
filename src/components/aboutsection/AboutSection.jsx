import React, { useContext } from 'react';
import './AboutSection.css';
import { DarkContext } from '../../context/darkContext';
import AboutImage from '../../assets/images/AboutImage.png';

const AboutSection = () => {
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
                <p
                  className="info"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  &nbsp;안녕하세요. 저는 항상 발전하려고 노력하는 프론트엔드
                  개발자입니다.
                  <br />
                  &nbsp;현재 사용하고 있는 기술로는 React.js 이고 프론트엔드의
                  기초를 잡기 위해 공부하고 있습니다. 제가 지향하는 개발자로서의
                  면모는 사용자 입장에서 성능과, 사용성이 좋은 웹사이트를
                  개발하는 개발자가 되고 싶습니다.
                  <br /> &nbsp;또한 웹개발의 CS지식을 겸비하기 위해 공부를 하여
                  팀원들과 협업을 위한 준비도 하고 있습니다. 이러한 준비를
                  바탕으로 조금 먼 미래에는 백엔드 기술까지 겸비한 풀스택
                  개발자가 되고 싶습니다.
                </p>
              ) : (
                <p
                  className="info"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  &nbsp;안녕하세요, 저는 오늘보단 내일이 더 나은 개발자가 되기
                  위해 노력하는 프론트엔드 개발자입니다.
                  <br />
                  &nbsp;현재 React.js를 이용해 프로젝트들을 만들어 보고 있고,
                  프론트엔드 개발의 기초를 잡기 위해 노력하고 있습니다.
                  <br />
                  웹개발에 필요한 CS지식, 알고리즘, 자료구조도 준비하여 좋은
                  개발자가 되고 싶습니다!
                </p>
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

export default AboutSection;
