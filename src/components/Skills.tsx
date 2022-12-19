import React from 'react';
import styled from 'styled-components';

import type { SkillType } from '@datas/skills';

const SkillTag = styled.span`
  display: inline-block;
  width: fit-content;
  font-size: 1.2rem;
  color: black;
  border: solid 1px black;
  /* background-color: lightgray; */
  border-radius: 0.8rem;
  padding: 4px 8px;
  margin: 4px 0 4px 4px;
  & > * {
    vertical-align: text-top;
  }
  img {
    display: inline-block;
    height: 1.4rem;
    width: auto;
    max-width: 3rem;
    margin-right: 6px;
    @media (min-width: 1px) and (max-width: 480px) {
      /* height: 1.4rem; */
      max-width: 2.6rem;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      /* height: 1.6rem; */
      max-width: 2.8rem;
    }
  }
`;

const SkillsListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  display: inline-block;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Skill = (Props: SkillType) => {
  const icon = Props.icon ?? `${Props.name.toLowerCase()}.svg`;
  return <SkillTag>
    {!Props.withoutIcon && <img
      height="1.4rem"
      alt={Props.name}
      src={`${process.env.PUBLIC_URL}/icons/${icon}`}
      onError={(e: any) => {
        e.target.style = "display: none;";
      }}
    />}
    {Props.name}
  </SkillTag>
};

const Skills = (Props: { skills?: string[]; withoutIcon?: boolean; label?: string; }) => {
  return <SkillsContainer>
    <SkillsListContainer>
      {Props.label}
      {Props.skills?.map((skill: string, i: number) => {
        const splitStartIdx = skill.indexOf("(");
        const splitEndIdx = skill.indexOf(")");
        let icon = `${skill.toLowerCase()}.svg`
        if (splitStartIdx !== -1 && splitEndIdx !== -1) {
          icon = icon.slice(0, splitStartIdx) + icon.slice(splitEndIdx+1);
        }
        return <Skill key={i} name={skill} icon={icon} withoutIcon={Props.withoutIcon} />
      })}
    </SkillsListContainer>
  </SkillsContainer>
};


export default Skills;
