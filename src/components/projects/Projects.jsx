import React, { useContext, useEffect } from 'react';
import { DarkContext } from '../../context/darkContext';
import { projectDB } from '../../assets/db/project';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineSelect } from 'react-icons/ai';
import './Projects.css';

const Projects = () => {
  const darkMode = useContext(DarkContext);
  const aColor = darkMode.darkMode ? "#3772F0" : "#231f20"


  return (
    <section className={darkMode.darkMode ? "project dark" : "project"}>
      <div className="project_wrap">
        <h2 className="title">
          <span>02.</span> Projects
        </h2>
        <ul className="project_content">
          {projectDB &&
            projectDB.map((project) => (
              <li className="project_items" key={project.id}>
                <div className="project_contents">
                  <div>
                    <p className="project_over">project 0{project.id}</p>
                    <h3 className="project_title">
                      <a
                        href={project.link}
                        target="_blank"
                        style={{color: aColor}}
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <div className="project_desc">
                      {Array.isArray(project.desc) &&
                        project.desc.map((desc) => <p>{desc}</p>)}
                    </div>

                    <ul className="project_skills">
                      {Array.isArray(project.skill) &&
                        project.skill.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="project_links">
                      <a
                        href={project.github}
                        target="_blank"
                        style={{ color: aColor }}
                        rel="noopener noreferrer"
                      >
                        <FiGithub />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        style={{ color: aColor}}
                        rel="noopener noreferrer"
                      >
                        <AiOutlineSelect />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_img">
                  <a
                    href="https://llvovll89.github.io/movieapp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="img_wrapper img">
                      <img src={project.imgUrl} alt="" loading="lazy" />
                    </div>
                  </a>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
