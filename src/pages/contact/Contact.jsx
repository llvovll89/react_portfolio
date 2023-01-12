import React, { useState } from 'react';
import contactImg from '../../assets/images/ho1.jpg';
import './Contact.css';

export const Contact = () => {
  const [inputText, setInputText] = useState('');

  // const handelClick = () => {
  //   setInputText(inputText.target.value);
  // }

  return (
    <>
      <section className="contact section">
        <div className="inner">
          <div className="contact_img" data-aos="zoom-in" data-aos-duration="1000">
            <img src={contactImg} alt="" />
          </div>
          <div className="contact_text">
            <h3 className="contact_title" data-aos="zoom-in-down" data-aos-duration="1000">CONTACT ME</h3>
            <div className="contact_list">
              <ul className="items" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="300">
                <li>
                  <span>Email</span>
                  <span>svvvs5579@naver.com</span>
                </li>
                <li>
                  <span>Github</span>
                  <span>llvovll89/github.com</span>
                </li>
                <li>
                  <span>Address</span>
                  <span>대구광역시 동구 신암동</span>
                </li>
                <li>
                  <span>Phone</span>
                  <span>+82-10-2570-????</span>
                </li>
              </ul>
            </div>
            <div className="contact_msg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <div className="contact_left">
                <label htmlFor="name"> name</label>
                <input
                  type="text"
                  placeholder="이름입력.."
                  name="name"
                />
                <label htmlFor="mail"> E-mail</label>
                <input
                  type="text"
                  placeholder="E-mail입력.."
                  name="mail"
                />
                <label htmlFor=""> Message</label>
                <textarea cols="30" type="text" placeholder="메시지 입력.." />
                <div className="contact_btnbox">
                  <button className="contact_btn">SEND
                  <span></span>
                  </button>
                </div>
              </div>
              <div className="contact_right"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
