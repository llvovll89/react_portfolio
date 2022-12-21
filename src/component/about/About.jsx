import React from 'react';
import { AboutItem } from './AboutItem';
import { about, backSkill } from '../../assets/db/data';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/ho1.jpg';
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
                  <div className="about-text pad15" key={item.id}>
                    <h3>{item.text}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="row about_row">
                <div className="about-info pad15">
                  <div className="row">
                    <AboutItem title="name" info="김건호" />
                    <AboutItem title="AGE" info="29세" />
                    <AboutItem title="Email" info="svvvs5579@naver.com" />
                    <AboutItem title="City" info="대구광역시" />
                    <AboutItem title="univercity" info="DaeguUnivercity" />
                    <AboutItem title="Department" info="컴퓨터소프트웨어" />
                  </div>
                  <div className="row">
                    <div className="btnbox pad15">
                      <Link to="/main-contact" className="main-btn">
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
                <div className="front pad15">
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
                <div className="backend pad15">
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
