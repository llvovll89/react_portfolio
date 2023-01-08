import React from 'react';
import './Newproject.css';
import newImg from '../../assets/images/img01.png';

export const Newproject = () => {
  return (
    <>
      <section className="new_section">
        <div className="new_title">
          <h3>Website</h3>
        </div>
        <div className="new_container">
          <div className="new_content">
            <div className="content_left flex_item">
              <div className="left_content">
                <p className="left_text">01 - 06</p>
                <h1 className="left-big">Llvovll89</h1>
                <p className="left-nomal">
                  2022년에 제작한 반응형 웹사이트 입니다. 웹사이트 전체를
                  구축하였고, 반응형 슬라이더, Aos플로그인을 이용한 애니메이션,
                  게시판, form을 이용하여 다양한 웹사이트를 제작하였습니다.
                </p>
              </div>
            </div>
            <div className="content_right flex_item"></div>
            <img src={newImg} alt="..." className="row_img" />
          </div>
          <div className="slide_nav">
            <a className='slide_item active' href="#"></a>
            <a className='slide_item' href="#"></a>
            <a className='slide_item' href="#"></a>
            <a className='slide_item' href="#"></a>
            <a className='slide_item' href="#"></a>
            <a className='slide_item' href="#"></a>
            <div className="click_btn_text">CLICK BTN</div>
          </div>
        </div>
      </section>
    </>
  );
};
