import React, { useContext } from 'react';
import { reactDB } from '../../../assets/db/reactData';
import { ReactCard } from './ReactCard';
import './ReactProject.css';
import { DarkContext } from '../../../context/darkContext';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const ReactProject = () => {
  const { darkMode } = useContext(DarkContext);

  const containerStyle = {
    background: darkMode ? '#1E1F21' : '#faf4f4',
    color: darkMode ? '#FFFFFF' : 'rgba(5,3,6)',
  };

  const splideOption = {
    perPage: 1,
    arrows: false,
    pagination: true,
    gap: '3rem',
    drag: true,
    focus: 'center',
  };

  return (
    <div className={darkMode ? "project_container dark" : "project_container"} style={containerStyle}>
      <div className="project_wrap">
        <Splide options={splideOption}>
          {reactDB.map((project) => (
            <ReactCard key={project.id} {...project} />
          ))}
        </Splide>
      </div>
    </div>
  );
};
