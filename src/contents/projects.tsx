import React from 'react';
import styled from 'styled-components';

import Skills from '@components/Skills';
import ProjectDatas, { ProjectType } from '@datas/projects';
import * as gtag from "@utils/gtag";

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

const ContentTitle = styled.h1`
  margin: 10px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px lightgray;
  padding: 10px 20px 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  word-break: keep-all;
  .title {
    width: 40vw;
    font-size: 1.8rem;
    font-weight: bold;
  }
  .project-img {
    object-fit: contain;
    border: solid 1px black;
    margin-top: 8px;
    max-width: 100%;
    height: auto;
  }
  @media (min-width: 1px) and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ProjectInfoContainer = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  font-size: 1.4rem;
  .description {
    display: inline-flex;
    min-height: 3rem;
    word-break: keep-all;
    display: flex;
    flex-direction: row;
  }
  a {
    text-decoration: underline;
    color: gray;
    &:hover {
      color: black;
    }
  }
`;

const Projects = () => {
  return <ContentsContainer>
    <ContentTitle>Projects</ContentTitle>
    {ProjectDatas.map((project: ProjectType, i: number) => <ProjectContainer key={i}>
      <div className="title" >
        <h2>{project.title}</h2>
        {/* {project.img && <img
          className="project-img"
          alt={project.title}
          src={project.img}
        />} */}
      </div>

      <ProjectInfoContainer>
        <div className="description">{project.description}</div>
        <br/>

        {project.url && <div className="description">
          <div onClick={() => {
            gtag.event({ action: "click_link", category: "move_to_link", label: `project_${project.title}`, value: project.url||"" });
          }}>
            <span>- Link :&nbsp;</span>
            <a href={project.url} target="_blank">
              {project.url}
            </a>
          </div>
        </div>}

        {project.github && <div className="description">
          <div onClick={() => {
            gtag.event({ action: "click_link", category: "move_to_github", label: `project_${project.title}`, value: project.github||"" });
          }}>
            <span>- Github :&nbsp;</span>
            <a href={project.github} target="_blank">
              {project.github}
            </a>
          </div>
        </div>}

        <div className="description">
          <Skills skills={project.skills} label="- Skills : " />
        </div>
      </ProjectInfoContainer>
    </ProjectContainer>)}
  </ContentsContainer>;
};

export default Projects;
