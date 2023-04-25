import React, { useContext, useRef, useState } from 'react';
import contactImages from '../../assets/images/contactImage.jpg';
import { DarkContext } from '../../context/darkContext';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
  const { darkMode } = useContext(DarkContext);
  const [state, setState] = useState({ message: '', mail: '', textArea: '' });

  const form = useRef(null);

  const serviceKey = process.env.REACT_APP_SERVICE_KEY;
  const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const bgColor = darkMode ? '#FFFFFF' : '#191919';
  const initColor = darkMode ? '#191919' : '#FFFFFF';
  const titleColor = darkMode ? '#191919' : '#3772F0';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceKey, templateKey, e.target, publicKey).then(
      (result) => {
        alert('전송되었습니다!');
        setState({ message: '', mail: '', textArea: '' });
      },
      (err) => {
        alert('전송에 실패 하였습니다!');
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
          transition: '0.15s all linear',
        }}
        id="contact"
      >
        <div className="inner">
          <div
            className="contact_img"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img src={contactImages} alt="" />
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
                  <span>Phone</span>
                  <span>+82-10-2570-????</span>
                </li>
                <li>
                  <span>velog</span>
                  <a
                    href="https://velog.io/@llvovll89"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: titleColor }}
                  >
                    https://velog.io/@llvovll89
                  </a>
                </li>
                <li>
                  <span>Github</span>
                  <a
                    href="https://github.com/llvovll89"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: titleColor }}
                  >
                    https://github.com/llvovll89
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="contact_right"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <form ref={form} onSubmit={sendEmail} className="submitForm">
                <div className="area">
                  <input
                    autoComplete="off"
                    type="text"
                    name="from_name"
                    value={state.message}
                    onChange={(e) =>
                      setState({ ...state, message: e.target.value })
                    }
                  />
                  <label htmlFor="from_name"> name</label>
                </div>
                <div className="area">
                  <input
                    autoComplete="off"
                    type="text"
                    name="e-mail"
                    value={state.mail}
                    onChange={(e) =>
                      setState({ ...state, mail: e.target.value })
                    }
                  />
                  <label htmlFor="e-mail"> E-mail</label>
                </div>
                <div className="area">
                  <textarea
                    cols="30"
                    type="text"
                    name="text"
                    value={state.textArea}
                    onChange={(e) =>
                      setState({ ...state, textArea: e.target.value })
                    }
                  />
                  <label htmlFor="text"> Message</label>
                </div>
                <div className="contact_btnbox">
                  <button
                    className="contact_btn"
                    style={{
                      color: darkMode ? '#1A1A2E' : '#FFFFFF',
                      background: darkMode ? '#191919' : '#3772F0',
                    }}
                  >
                    전송하기
                    <span></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
