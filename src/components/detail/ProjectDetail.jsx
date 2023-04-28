import React, { useContext, useEffect, useState } from 'react';
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

  const getProjectInfo = () => {
    const project = projectDB.find((p) => p.id === id);
    setProjectInfo(project);
  };

  const getProjectDetail = () => {
    const details = projectDetailDB.find((detail) => detail.id === id);
    setProjectDetails(details);
  };

  const closeHandler = () => {
    close();
  };

  useEffect(() => {
    getProjectInfo();
    getProjectDetail();
  }, []);

  return (
    <>
      <div className={`detail_modal${darkMode.darkMode ? '' : ' dark'}`}>
        <div className="detail_contents">
          <div className="detail_top">
            <p className="detail_nums">{`project 0${projectInfo.id}`}</p>
            <h3 className="detail_name">{projectInfo.title}</h3>
          </div>
          <div className="detail_techs">
            <h2 className="sm_title">Tech Skills</h2>
            {projectDetails &&
              projectDetails.techStack &&
              projectDetails.techStack.length > 0 && (
                <ul className="detail_tech_items">
                  {projectDetails.techStack.map((tech) => (
                    <li key={tech.id}>
                      <p>{tech.name}</p>
                      <p>{tech.icon}</p>
                    </li>
                  ))}
                </ul>
              )}
          </div>

          {projectDetails &&
            projectDetails.features &&
            projectDetails.features.length > 0 && (
              <div className="detail_features">
                <h2 className="sm_title">Detail features</h2>
                <ul className="detail_items">
                  {projectDetails.features.map((feature) => (
                    <li key={feature.title}>
                      <h3>৹ {feature.title}</h3>
                      <p>{feature.description}</p>
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
                  {projectDetails.issues.map((issue) => (
                    <li key={issue.title}>
                      <h3>৹ {issue.title}</h3>
                      <p>{issue.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          <div className="detail_links">
            <div className="links_item">
              <a
                href={projectDetails.github}
                className="link_btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub (코드저장소)
              </a>
              <a
                href={projectDetails.link}
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
