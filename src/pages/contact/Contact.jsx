import React, { useContext, useRef, useState } from 'react';
import contactImg from '../../assets/images/ho1.jpg';
import { DarkContext } from '../../context/darkContext';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
  const { darkMode } = useContext(DarkContext);

  const [message, setMessage] = useState('');
  const [mail, setMail] = useState('');
  const [textArea, setTextArea] = useState('');
  const form = useRef();

  const serviceKey = process.env.REACT_APP_SERVICE_KEY;
  const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const bgColor = darkMode ? '#050306' : '#FFFFFF';
  const initColor = darkMode ? '#FFFFFF' : '#050306';
  const titleColor = darkMode ? '#1DE9B6' : '#050306';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceKey, templateKey, e.target, publicKey).then(
      (result) => {
        alert('전송되었습니다!');
        setMessage('');
        setMail('');
        setTextArea('');
        console.log(result.text);
      },
      (err) => {
        alert('전송에 실패 하였습니다!');
        console.log(err.text);
      }
    );
  };

  return (
    <>
      <div
        className="contact"
        style={{
          background: bgColor,
          color: initColor,
          transition: '0.25s all linear',
        }}
      >
        <div className="inner">
          <div
            className="contact_img"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img src={contactImg} alt="" />
          </div>
          <div className="contact_text">
            <h3
              className="contact_title"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              style={{ color: titleColor }}
            >
              CONTACT ME
            </h3>
            <div className="contact_list">
              <ul
                className="items"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
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
            <div
              className="contact_msg"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <form ref={form} onSubmit={sendEmail} className="contact_left">
                <label htmlFor="from_name"> name</label>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="이름입력.."
                  name="from_name"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label htmlFor="e-mail"> E-mail</label>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="E-mail입력.."
                  name="e-mail"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
                <label htmlFor="text"> Message</label>
                <textarea
                  cols="30"
                  type="text"
                  placeholder="메시지 입력.."
                  name="text"
                  value={textArea}
                  onChange={(e) => setTextArea(e.target.value)}
                />
                <div className="contact_btnbox">
                  <button
                    className="contact_btn"
                    style={{ color: darkMode ? '#fff' : '#000' }}
                  >
                    SEND
                    <span></span>
                  </button>
                </div>
              </form>
            </div>
            <div className="contact_right"></div>
          </div>
        </div>
      </div>
    </>
  );
};
