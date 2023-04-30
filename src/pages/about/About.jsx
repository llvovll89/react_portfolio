import React, { useContext } from 'react';
import { DarkContext } from '../../context/darkContext';
import AboutImage from '../../assets/images/about.png';
import './About.css';

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
                    &nbsp;새로운 기술을 배우는것에 흥미가있는 개발자
                    <span className="salmon">김건호</span> 입니다.
                  </p>
                  <p>
                    현재 사용하고 있는 기술로는 React.js 이고 프론트엔드
                    개발 성장을 위해 각종 라이브러리와 스킬들을 공부하고
                    있습니다.
                  </p>
                  <p>
                  열심히 하는 개발자를 넘어 잘하는 개발자가 되기
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
                  &nbsp;오늘보단 내일이 더 나은 개발자가 되기 위해 노력하는
                  &nbsp;
                    <span className="salmon">김건호</span> 입니다
                  </p>

                  <p>
                    현재 React.js를 이용해 프로젝트들을 만들어 보고 있고,
                    프론트엔드 개발의 기술력을 위해 노력하고 있습니다.
                  </p>
                  <p>
                    열심히 하는 개발자를 넘어 잘하는 개발자가 되기
                    위해서 노력하겠습니다.
                  </p>
                </div>
              )}

              <div>
                <p className="skill_title info">My Skill</p>
                <ul className="skills">
                  <li data-aos="zoom-in-right" data-aos-duration="1000">
                    <h3>Javascript(es6)</h3>
                    <div>
                      <p>비동기 처리와 API통신이 가능합니다.</p>
                      <p>JS를 이용하여 DOM객체 조작과, 이벤트 처리가 가능합니다.</p>
                      <p>자바스크립트 핵심개념을 잡기위해 공부하고있습니다.</p>
                    </div>
                  </li>
                  <li data-aos="zoom-in-left" data-aos-duration="1000">
                  <h3>React</h3>
                  <div>
                    <p>비동기 처리와 API통신이 가능합니다.</p>
                    <p>REACT 로 SPA 프로젝트 경험을 가지고 있습니다.</p>
                    <p>리액트 개발과정에 필요한 각종 라이브러리를 사용할 수 있습니다.</p>
                    <p>styles-components를 사용한 css경험이 있습니다.</p>
                  </div>
                  </li>
                  <li data-aos="zoom-in-right" data-aos-duration="1000">
                    <h3>HTML/CSS</h3>
                    <div>
                      <p>웹 접근성을 고려한 시멘틱한 마크업을 작성할 수 있습니다.</p>
                      <p>미디어 쿼리를 통한 반응형 웹 개발을 할 수 있습니다.</p>
                      <p>Bootstrap을 사용하여 웹 페이지를 구현한 경험이 있습니다.</p>
                    </div>
                  </li>
                  <li data-aos="zoom-in-left" data-aos-duration="1000">
                    <h3>Node</h3>
                    <div>
                      <p>React 와 Node 및 express를 이용한 서버와 클라이언트 개발 경험이 있습니다.</p>
                      <p>express 프레임워크를 이용하여 REST API를 구현한 경험이 있습니다.</p>
                    </div>
                  </li>
                  <li data-aos="zoom-in-right" data-aos-duration="1000">
                    <h3>MongoDB</h3>
                    <div>
                      <p>MongoDB를 이용한 프로젝트 경험이 있습니다.</p>
                      <p>Mongoose 라이브러리를 사용하여 React, Node와 연동한 경험이 있습니다.</p>
                      <p></p>
                    </div>
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
