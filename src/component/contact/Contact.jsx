import React from 'react'
import {AiFillPhone, AiFillMail , AiOutlineIe } from 'react-icons/ai'
import './Contact.css';
import { Contactitem } from './Contactitem';

export const Contact = () => {
  return (
    <>
      <section className='contact section hidden'>
        <div className="section-container container">
          <div className="row">
            <div className="section-title pad15">
              <h2>CONTACT ME</h2>
            </div>
          </div>
          <h3 className="contact-title">
            저의 PORTFOLIO가 마음에 드신다면 연락주세요!
          </h3>
          <div className="row row-grid">
            <Contactitem 
              icons=<AiFillMail />
              title="E-mail"
              sub="svvvs5579@naver.com"
            />
            <Contactitem 
              icons=<AiFillPhone />
              title="Phone Number"
              sub="010-0101-0101"
            />
            <Contactitem 
              icons=<AiOutlineIe />
              title="Wepsite"
              sub="https://github.com/llvovll89"
            />
          </div>
            <div className="contact-box"></div>
        </div>
      </section>
    </>
  )
}
