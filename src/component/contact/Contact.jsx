import React from 'react';
import contactImg from '../../assets/images/info.jpg';
import './Contact.css';

export const Contact = () => {
  return (
    <>
      <section className="contact section">
        <div className="inner">
          <div className="contact_img">
            <img src={contactImg} alt="" />
          </div>
          <div className="contact_text">
            <h3 className="contact_title">CONTACT</h3>
            <div className="contact_list">
              <ul className="items">
                <li>
                  <span>Email</span>
                  <a href="#">svvvs5579@naver.com</a>
                </li>
                <li>
                  <span>Github</span>
                  <a href="#">llvovll89/github.com</a>
                </li>
                <li>
                  <span>Velog</span>
                  <a href="#">llvovll89/velog.com</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href="#">010-3333-3333</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
