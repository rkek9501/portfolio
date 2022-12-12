import React from 'react';
import styled from 'styled-components';

import Skills from '../components/Skills';
import ProjectDatas, { ProjectType } from '../datas/projects';

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

const ContentTitle = styled.div`
  margin: 10px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px 20px;
  .title {
    width: 40vw;
    font-size: 1.8rem;
    font-weight: bold;
  }
  .project-img {
    object-fit: contain;
    border: solid 1px black;
    margin-top: 8px;
  }
  @media (min-width: 1px) and (max-width: 1000px) {
    flex-direction: column;
    .title {
      width: 100%;
    }
  }
`;
const ProjectInfoContainer = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px 20px;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 1.4rem;
  .description {
    display: inline-flex;
    min-height: 3rem;
    margin-left: 12px;
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1px) and (max-width: 1000px) {
    margin-top: 0;
    margin-left: 0;
    padding: 10px 0;
  }
`;

const Projects = () => {
  return <ContentsContainer>
    <ContentTitle>Projects</ContentTitle>
    {ProjectDatas.map((project: ProjectType, i: number) => <ProjectContainer key={i}>
      <div className="title" >
        {project.title}
        {project.img && <img className="project-img" alt={project.title} src={project.img}/>}
      </div>

      <ProjectInfoContainer>
        <div className="description">{project.description}</div>
        <br/>

        {project.github && <div className="description">
          - Github :&nbsp;
          <a href={project.github} target="_blank">
            {project.github}
          </a>
        </div>}

        {project.url && <div className="description">
          - URL :&nbsp;
          <a href={project.url} target="_blank">
            {project.url}
          </a>
        </div>}

        <div className="description">
          <Skills skills={project.skills} label="- Skills : " />
        </div>
      </ProjectInfoContainer>
    </ProjectContainer>)}
  </ContentsContainer>;
};

export default Projects;
