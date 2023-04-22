import React, { useContext } from 'react';
import './AboutSection.css';
import { DarkContext } from '../../context/darkContext';
import AboutImage from '../../assets/images/AboutImage.png';

const AboutSection = () => {
  const darkMode = useContext(DarkContext);

  return (
    <section className="about">
      <div className="abouts_container">
        <h2 className="about_title">
          <span>02.</span> About Me
        </h2>
        <div className="about_content">
          <div className="left">
            <div className="items">
              <p className="info">
                &nbsp;안녕하세요. 저는 항상 발전하려고 노력하는 프론트엔드 개발자입니다.
                <br />
                현재 사용하고 있는 기술로는 React.js 이고 프론트엔드의 기초를
                잡기 위해 공부하고 있습니다. 제가 지향하는 개발자로서의 면모는
                사용자 입장에서 성능과, 사용성이 좋은 웹사이트를 개발하는
                개발자가 되고 싶습니다.
                <br /> &nbsp;또한 웹개발의 CS지식을 겸비하기 위해 공부를 하여
                팀원들과 협업을 위한 준비도 하고 있습니다. 이러한 준비를
                바탕으로 조금 먼 미래에는 백엔드 기술까지 겸비한 풀스택 개발자가
                되고 싶습니다.
              </p>

              <p className="skill_title info">My Skill</p>
              <ul className="skills">
                <li>Javascript(es6)</li>
                <li>React.js</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>git</li>
                <li>mongoDB</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
                <img src={AboutImage} alt="AboutImage.." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
