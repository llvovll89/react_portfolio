import React, { useContext } from 'react';
import { reactDB } from '../../../assets/db/reactData';
import { ReactCardForm } from './ReactCardForm';
import './ReactProject.css';

import { DarkContext } from '../../../context/darkContext';

// splide
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const ReactProject = () => {
  const { darkMode } = useContext(DarkContext);
  const containerClassName = darkMode
    ? 'project_container dark_mode'
    : 'project_container';

  return (
    <div className={containerClassName}>
      <div className="project_wrap">
        <Splide
          options={{
            perPage: 1,
            arrows: false,
            pagination: false,
            gap: '6rem',
            drag: 'free',
            focus: 'center',
          }}
        >
          {reactDB.map(
            ({
              id,
              text,
              title,
              desc,
              imgUrl,
              link,
              github,
              icons,
              contentLink,
            }) => (
              <ReactCardForm
                key={id}
                text={text}
                title={title}
                desc={desc}
                imgUrl={imgUrl}
                link={link}
                github={github}
                icons={icons}
                velog={contentLink}
              />
            )
          )}
        </Splide>
      </div>
    </div>
  );
};
