import React, { Fragment } from 'react';
import styled from 'styled-components';

import { SkillData, SkillType } from '@datas/skills';
import { Skill } from '@components/Skills';

const ContentTitle = styled.div`
  margin: 10px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const SkillsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  @media (min-width: 1px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SkillsType = styled.div`
  width: 110px;
  min-width: 110px;
  font-size: 1.6rem;
  font-weight: bold;
  @media (min-width: 1px) and (max-width: 768px) {
    width: 100%;
  }
`;

const Divider = styled.div`
  width: 1.2px;
  background-color: lightgray;
  margin: 0 10px;
  @media (min-width: 1px) and (max-width: 768px) {
    display: none;
  }
`;

const SkillsList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  display: inline-block;
`;

const Skills = () => {
  return <div>
    <ContentTitle>Skills</ContentTitle>
    <SkillsContainer>
      {SkillData.map((row, i) => {
        return <SkillsRow key={i}>
        <SkillsType>{row.name}</SkillsType>
        <Divider/>
        <SkillsList>
          {row.list.map((skill: SkillType, j) =>{
            return <Fragment key={j}>
               <Skill name={skill.name} icon={skill.icon ?? null} />
            </Fragment>
          })}
        </SkillsList>
      </SkillsRow>
      })}
    </SkillsContainer>
  </div>;
};

export default Skills;