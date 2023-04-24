import React, { useContext } from 'react';
import { DarkContext } from '../../context/darkContext'
import { projectDB } from '../../assets/db/project';
import { FiGithub } from 'react-icons/fi'
import { AiOutlineSelect } from 'react-icons/ai'
import './Projects.css';

const Projects = () => {
    const darkMode = useContext(DarkContext);
  
  return (
    <section id="project">
      <div className="project_wrap">
        <h2 className="title"><span>02.</span> Projects
        </h2>
        <ul className='project_container'>      
        {projectDB && projectDB.map((project) => (
                <li className="project_items" key={project.id}>
                <div className="project_contents">
                <div>
                  <p className="project_over">project 0{project.id}</p>
                  <h3 className="project_title">{project.title}</h3>
                  <div className="project_desc">
                    
                    {Array.isArray(project.desc) && project.desc.map(desc => (
                      <p>
                        {desc}
                      </p>
                    ))}
                  </div>
  
                  <ul className="project_skills">
                      {Array.isArray(project.skill) && project.skill.map(item => (
                        <li key={project.id}>
                          {item}
                        </li>
                      ))}
                  </ul>
                  <div className="project_links">
                    <a href={project.github}><FiGithub /></a>
                    <a href={project.link}><AiOutlineSelect /></a>
                  </div>
                </div>
              </div>
              <div className="project_img">
                <a
                  href="https://llvovll89.github.io/movieapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="img_wrapper">
                      <img src={project.imgUrl} alt="" />
                  </div>
                </a>
              </div>
                </li>
              ) )}
              </ul>
      </div>
    </section>
  );
};

export default Projects;
