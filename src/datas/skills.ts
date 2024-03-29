export type SkillType = {
  name: string;
  icon?: string | null;
  withoutIcon?: boolean;
}
export type SkillDataType = {
  name: string | null;
  list: SkillType[]
}

export const SkillData: SkillDataType[] = [{
/*
  name: "Main Language",
  list: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "Javascript" },
    { name: "Typescript" },
    { name: "Java" }
  ]
}, {
  name: "FrontEnd",
  list: [
    { name: "React" },
    { name: "NextJs" },
    { name: "Android" },
    { name: "React-Native" },
    { name: "Expo" },
    { name: "Cordova" },
    { name: "Electron" },
    // { name: "Webpack" },
    // { name: "Snowpack" },
    { name: "Storybook" }
  ]
}, {
  name: "BackEnd",
  list: [
    { name: "Nodejs" },
    { name: "Apollo-Graphql" }
  ]
}, {
  name: "Database",
  list: [
    { name: "Mysql" },
    { name: "Sqlite" },
    { name: "Redis" }
  ]
}, {
  name: "Version Control",
  list: [
    { name: "Git" },
    { name: "Github" },
    { name: "Bitbucket" }
  ]
}, {
  name: "Depolyment",
  list: [
    { name: "Docker" },
    { name: "AWS" }
  ]
}, {
  name: "Others",
  list: [
    { name: "Arduino" },
    { name: "Postman" },
    { name: "Notion" },
    { name: "Jira" },
    { name: "Slack" },
    { name: "Zeplin" },
    { name: "Figma" }
  ]
}, {
*/
  name: null,
  list: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "React-Native" },
    { name: "NextJs" },
    { name: "NodeJS" },
    { name: "Express" },
    { name: "GraphQL" },
    { name: "MySQL" },
    { name: "Git" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Notion" },
    { name: "JIRA" },
    { name: "Slack" },
    { name: "JIRA" }
  ]
}];
