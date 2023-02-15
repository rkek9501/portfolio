import React from 'react';
import styled from 'styled-components';

import * as gtag from "@utils/gtag";
import { Blog, Email, Github, LinkType, Phone, ProfileImgSrc } from '@datas/links';

const AboutMeContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  max-width: 50vw;
  max-height: 50vw;
  border-radius: 50px;
  margin: 0 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
    aspect-ratio: auto 100 / 100;
    border-radius: 30vw;
  }
  @media (min-width: 1px) and (max-width: 480px) {
    margin: 0 4px;
    img {
      width: 50vw;
      height: 50vw;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin: 0 10px;
  }
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 1px) and (max-width: 480px) {
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px;
  }
`;

const Introduce = styled.div`
  display: block;
  text-align: center;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  flex: 1;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1.4rem;
  width: 100%;
  @media (min-width: 1px) and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  width: 50%;
  max-width: 250px;
`;
const LinkItem = styled.div`
  display: inherit;
  margin: 4px 0;
  font-size: 1.3rem;
  .group {
    font-size: 1.4rem;
  } 
  .label {
    margin-left: 10px;
  }
  &* {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  a {
    text-decoration: underline;
    color: gray;
    &:hover {
      color: black;
    }
  }
`;

const Link = (Props: LinkType) => {
  return <LinkItem>
    <b className="label">{Props.label}:&nbsp;</b>
    <div onClick={() => gtag.event(Props.event)}>
      <a href={Props.href} target={Props.type === "contact" ? "_self" : "_blank"}>{Props.text}</a>
    </div>
  </LinkItem>
};

const AboutMe = () => {
  return <AboutMeContainer>
    <IntroduceContainer>
      <ImageContainer>
        <img src={ProfileImgSrc} alt="profile" width={100} height={100} />
      </ImageContainer>
      <Introduce>
        현실에 안주하지 않고 늘 발전하는<br/>
        '<b>정도영</b>'입니다.
      </Introduce>
    </IntroduceContainer>
    <Links>
      <LinkGroup>
        <b className="group">Contact.</b>
        <Link {...Email} />
        <Link {...Phone} />
      </LinkGroup>

      <LinkGroup>
        <b className="group">Channel.</b>
        <Link {...Blog} />
        <Link {...Github} />
      </LinkGroup>
    </Links>
  </AboutMeContainer>;
};

export default AboutMe;