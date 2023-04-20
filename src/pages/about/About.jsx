import React, { useContext } from 'react';
import { AboutItem } from './AboutItem';
import { about, backSkill, frontSkill } from '../../assets/db/data';
import aboutImg from '../../assets/images/kimgeonho.jpg';
import { DarkContext } from '../../context/darkContext';
import './About.css';

export const About = () => {
  const { darkMode } = useContext(DarkContext);

  const aboutStyles = {
    background: darkMode ? '#1E1F21' : '#FFFFFF',
    color: darkMode ? '#FFFFFF' : '#1E1F21',
  };

  const btnStyles = {
    background: darkMode ? '#FFFFFF' : '#1e1f21',
    color: darkMode ? '#1e1f21' : '#FFFFFF',
  };

  return (
    <>
      <div className="about_container" id='about' style={aboutStyles}>
        <div className="about_title">
          <div
            className="section-title "
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <h2>About Me</h2>
          </div>
        </div>
        <div className="about_contents">
          <div className="about-content">
              {about.map((item) => (
                <div
                  className="about-text "
                  key={item.id}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <h3>{item.text}</h3>
                  <ul className="on">
                    <li>
                      저는 다양한&nbsp;
                      <span className="col-1"> "상상력과 아이디어"</span> 를
                      통해 무엇인가 만드는 것을 좋아하는 사람입니다.
                    </li>
                    <li>
                      디자이너, 백엔드 개발자 또는 의사소통이 필요한 부분에서
                      &nbsp;
                      <span className="col-1">"커뮤니케이션"</span> 이 활발 할
                      수 있게 할 것 입니다.
                    </li>
                    <li>
                      변화하는 추세에 맞추어 지식을 계속 쌓으며 회사에
                      실직적으로 도움이 되는 프론트엔드 개발자가 되고 싶습니다.
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="about_items">
              <div className="about-info">
                <div className="row about_row">
                  <AboutItem title="이름" info="김건호" />
                  <AboutItem title="이메일" info="svvvs5579@naver.com" />
                  <AboutItem title="학교" info="대구대학교" />
                  <AboutItem title="학과" info="컴퓨터 소프트웨어학과" />
                  <AboutItem
                    title="frontend"
                    info="Javascript(es6), React , Redux "
                  />
                  <AboutItem
                    title="backend"
                    info="node.js, Firebase, mongoDB "
                  />
                </div>
                <div className="btnbox">
                  <a
                    href="https://velog.io/@llvovll89"
                    className="about_btn"
                    target="_blank"
                    rel="noreferrer"
                    style={btnStyles}
                  >
                    Blog Go
                  </a>
                </div>
              </div>
              <div
                className="about-img"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
                <img src={aboutImg} alt="aboutimg.." />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
