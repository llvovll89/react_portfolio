import React from 'react';
import { AboutItem } from './AboutItem';
import { about, backSkill } from '../../assets/db/data';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/hojjang.png'
import { frontSkill } from '../../assets/db/data';
import './About.css';

export const About = () => {
  return (
    <>
      <section className="about section hidden">
        <div className="about-container container">
          <div className="row">
            <div
              className="section-title pad15"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content">
              <div className="row">
                {about.map((item) => (
                  <div className="about-text pad15" key={item.id}
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
                        실직적으로 도움이 되는 프론트엔드 개발자가 되고
                        싶습니다.
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="row about_row">
                <div className="about-info pad15">
                  <div className="row mobile_row">
                    <AboutItem title="name" info="김건호" />
                    <AboutItem title="AGE" info="29세" />
                    <AboutItem title="Email" info="svvvs5579@naver.com" />
                    <AboutItem title="City" info="대구광역시" />
                    <AboutItem title="univercity" info="DaeguUnivercity" />
                    <AboutItem title="Department" info="컴퓨터소프트웨어" />
                  </div>
                  <div className="row btn_row">
                    <div className="btnbox pad15">
                      <Link to="/contact" className="about_btn">
                        CONTACT ME
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="about-img pad15">
                  <div
                    className="aboutimg-box"
                    data-aos="zoom-in-right"
                    data-aos-duration="1000"
                  >
                    <img src={aboutImg} alt="" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div
                  className="front pad15"
                  data-aos="fade-left"
                  data-aos-duration="1100"
                >
                  <div className="front-text">
                    <h4>FRONT SKILL</h4>
                    <div className="front-content">
                      {frontSkill.map((item) => (
                        <div className="front-item" key={item.id}>
                          <span>{item.icons}</span>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="backend pad15"
                  data-aos="fade-right"
                  data-aos-duration="1100"
                >
                  <div className="back-text">
                    <h4>BACKEND SKILL</h4>
                    <div className="backend-content">
                      {backSkill.map((item) => (
                        <div className="back-item" key={item.id}>
                          <span>{item.icons}</span>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
