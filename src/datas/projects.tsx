import React, { ReactElement } from 'react';

export type ProjectType = {
  title: string;
  description: ReactElement;
  skills: string[];
  github?: string;
  url?: string;
  img?: string;
};

const ProjectDatas: ProjectType[] = [{
  title: "Deer",
  description: <>
    개발 & 디자인 블로그 프로젝트<br/>
    Deer는 Developer와 Designer의 공통되는 알파벳인 'De'와 'er'을 합친 단어로
    각각 1명의 개발자와 디자이너가 팀이 되어 진행한 주말 팀 프로젝트.<br/><br/>
    AWS를 기반으로한 배포와 Google(Search Console, Analytics 등) 기반의 운영 및 관리를 통해 서비스 배포 및 관리의 전제적인 프로세스를 배울 수 있었음.<br/>
    {/* 기간 : ~ 2022.09<br/> */}
  </>,
  github: "https://github.com/rkek9501/deer",
  url: "https://de-er.link",
  img: `${process.env.PUBLIC_URL}/imgs/deer.webp`,
  skills: [
    "Typescript",
    "React", "Nextjs", // "styled-components",
    "Nodejs", "Express", "Sqlite",
    "Nginx", "PM2", "AWS(EC2, RDS, Route53, ect...)",
    "Figma", "Github",
    "Google-Analytics", "Google-Search-Console",
  ]
}, {
  title: "Doyoung's Space",
  description: <>
    Github Pages 포트폴리오 페이지 제작<br/><br/>
    그 간 진행했던 프로젝트와 업무를 되돌아봄.<br/>
    {/* 기간 : 2022.11 ~ <br/> */}
  </>,
  github: "https://github.com/rkek9501/portfolio",
  url: "https://rkek9501.github.io/portfolio",
  img: `${process.env.PUBLIC_URL}/imgs/portfolio.webp`,
  skills: [
    "Typescript", "React", // "styled-components",
    "Github(Pages)",
    "Google-Analytics",
    // "Google-Search-Console"
  ]
}];

export default ProjectDatas;