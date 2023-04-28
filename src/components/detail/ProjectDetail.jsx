import React, { useContext, useEffect, useRef, useState } from 'react';
import { projectDB, projectDetailDB } from '../../assets/db/project';
import {
  AiOutlineClose,
  AiOutlineSelect,
  AiOutlineCheck,
} from 'react-icons/ai';
import { DarkContext } from '../../context/darkContext';
import './ProjectDetail.css';

const ProjectDetail = ({ id, close }) => {
  const darkMode = useContext(DarkContext);
  const [projectInfo, setProjectInfo] = useState({});
  const [projectDetails, setProjectDetails] = useState({});

  const modalOutRef = useRef();

  const getProjectInfo = () => {
    const project = projectDB.find((p) => p.id === id);
    setProjectInfo(project);
  };

  const getProjectDetail = () => {
    const details = projectDetailDB.find((detail) => detail.id === id);
    setProjectDetails(details);
  };

  const getProjectData = () => {
    getProjectInfo();
    getProjectDetail();
  };

  const closeHandler = () => {
    close();
  };

  const handleClickOutside = (e) => {
    if (modalOutRef.current && !modalOutRef.current.contains(e.target))
      closeHandler();
  };

  useEffect(() => {
    getProjectData();
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`detail_modal${darkMode.darkMode ? '' : ' dark'}`}
        ref={modalOutRef}
      >
        <div className="detail_contents">
          <div className="detail_title">
          <h3 className="detail_name">{projectInfo.title}</h3>
          <span>{projectDetails.prupose}</span>
          </div>

          {projectDetails.techStack?.length > 0 && (
            <div className="detail_techs">
              <h2 className="sm_title">Tech Skills</h2>
              <ul className="detail_tech_items">
                {projectDetails.techStack.map((tech) => (
                  <li key={tech.id}>
                    <p>{tech.name}</p>
                    <p>{tech.icon}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {projectDetails &&
            projectDetails.features &&
            projectDetails.features.length > 0 && (
              <div className="detail_features">
                <h2 className="sm_title">Detail features</h2>
                <ul className="detail_items">
                  {projectDetails.features.map(({ title, description }) => (
                    <li key={title}>
                      <h3>৹ {title}</h3>
                      <p>{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {projectDetails &&
            projectDetails.issues &&
            projectDetails.issues.length > 0 && (
              <div className="detail_issue">
                <h2 className="sm_title">Issue & Resolution</h2>
                <ul className="detail_items">
                  {projectDetails.issues.map(({ title, description }) => (
                    <li key={title}>
                      <h3>৹ {title}</h3>
                      <p>{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          <div className="detail_links">
            <div className="links_item">
              <a
                href={projectInfo.github}
                className="link_btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub (코드저장소)
              </a>
              <a
                href={projectInfo.link}
                className="link_btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                프로젝트 보기
              </a>
            </div>
          </div>
        </div>

        <button className="close" onClick={closeHandler}>
          <AiOutlineClose />
        </button>
      </div>
    </>
  );
};

export default ProjectDetail;
