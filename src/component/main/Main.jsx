import React from 'react'
import { mainhome } from '../../assets/db/data';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { MdTouchApp } from 'react-icons/md';
import mainhomeIMG from '../../assets/images/info.jpg';
import './Main.css';

export const Main = () => {
  return (
    <>
      <section className="main section hidden">
        <div className="main-container container">
          <div className="row">
            <div className="main-info pad15">
              <div className="info-anitext">
                <h3
                  className="info-title"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  제 포트폴리오에 오신 걸 환영합니다.{' '}
                </h3>
                {mainhome.map((item) => (
                  <Typewriter
                    key={item.id}
                    options={{
                      strings: [`${item.name}`, `${item.post}`],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                ))}
              </div>
              <p
                className="info-desc"
                data-aos="zoom-in-right"
                data-aos-delay="500"
                data-aos-duration="1200"
              >
                I am Gunho Kim, a new front-end developer. Currently, we are
                steadily planting grass on Github and developing, and we
                will become a growing developer. Please see my portfolio and
                contact me if you like it!
              </p>
              <Link to="/contact" className="main-btn">
                More Me
                <span>
                  <MdTouchApp />
                </span>
              </Link>
            </div>

            <div
              className="main-img pad15"
              data-aos="zoom-out"
              data-aos-delay="900"
              data-aos-duration="1100"
            >
              <img src={mainhomeIMG} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
