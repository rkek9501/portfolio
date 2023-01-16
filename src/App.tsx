import React, { useState, useRef, useCallback, useMemo } from "react";
import styled from "styled-components";

import Header from "@components/Header";
import Icons from "@components/Icons";
import { AboutMe, Career, Skills, Projects } from "@contents/index";
import { Blog, Email, Github, LinkType, Phone } from "@datas/links";
import * as gtag from "@utils/gtag";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: none;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  min-height: 1px;
  background-color: lightgray;
`;
const ContentsAndFooter = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex: 1;
  flex-direction: column;
  scroll-behavior: smooth;
`;
const MainContentsArea = styled.div`
  margin-top: 60px;
  padding: 0 200px 20px;
  @media (min-width: 1px) and (max-width: 480px) {
    padding: 0 20px 20px;
  }
  @media (min-width: 481px) and (max-width: 1000px) {
    padding: 0 60px 20px;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  background-color: black;
  padding: 10px 200px;

  .lineDivider {
    display: inline;
  }
  @media (min-width: 1px) and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
    .lineDivider {
      display: none;
    }
  }
  @media (min-width: 481px) and (max-width: 1000px) {
    padding: 10px 60px;
  }
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 4px 10px;
  }
`;

const ContentBox = styled.section`
  padding: 10px 0 20px;
  width: 100%;
  @media (min-width: 1px) and (max-width: 480px) {
    padding: 10px 0 20px;
  }
  @media (min-width: 481px) and (max-width: 1000px) {
    padding: 10px 0 20px;
  }
`;

const Fab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: solid 2px black;
  background-color: white;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  position: absolute;
  bottom: 20px;
  right: 160px;
  @media (min-width: 1px) and (max-width: 480px) {
    right: 16px;
  }
  @media (min-width: 481px) and (max-width: 1000px) {
    right: 20px;
  }
`;

const LinkContainer = styled.div`
  a {
    text-decoration: underline;
    color: white;
    &:hover {
      color: gray;
      svg path {
        fill: gray;
      }
    }
    svg {
      margin-right: 2px;
      &:hover {
        fill: gray;
      }
    }
  }
`;

const FooterLink = (Props: LinkType) => {
  return <LinkContainer onClick={() => gtag.event(Props.event)}>
    <a href={Props.href} target={Props.type === "contact" ? "_self" : "_blank"}>
      {Props.icon}
      {Props.type === "contact" ? Props.text : Props.label}
    </a>
  </LinkContainer>
};

const App = () => {
  const [hiddenHeader, setHiddenHeader] = useState(false);
  const contentLoaded = useRef(null);
  const top = useMemo(() => hiddenHeader ? "-60px" : "0", [hiddenHeader]);

  const gotoTop = useCallback(() => {
    if (contentLoaded?.current) {
      const scroller = document.getElementById("main-contents");
      scroller?.scrollTo(0,0);
      setHiddenHeader(false);
    }
  }, [contentLoaded]);

  return (
    <MainContainer>
      <Header top={top} setHiddenHeader={setHiddenHeader} />

      <ContentsAndFooter
        id="main-contents"
        ref={contentLoaded}
        onWheel={(event: any) => {
          if (event?.nativeEvent?.wheelDelta > 0) {
            setHiddenHeader(false);
          } else {
            setHiddenHeader(true);
          }
        }}>
        <MainContentsArea>
          <ContentBox id="aboutme" className="about-me">
            <AboutMe />
          </ContentBox>
          <Divider />
          <ContentBox id="projects" className="my-projects">
            <Projects/>
          </ContentBox>
          <Divider />
          <ContentBox id="career" className="my-career">
            <Career/>
          </ContentBox>
          <Divider />
          <ContentBox id="skills" className="my-skills">
            <Skills/>
          </ContentBox>
        </MainContentsArea>

        <Footer>
          <FooterLink {...Email}/>
          <div className="lineDivider">&nbsp;|&nbsp;</div>
          <FooterLink {...Phone}/>
          <div className="lineDivider">&nbsp;|&nbsp;</div>
          <FooterLink {...Blog}/>
          <div className="lineDivider">&nbsp;|&nbsp;</div>
          <FooterLink {...Github}/>
        </Footer>
      </ContentsAndFooter>
      <Fab onClick={gotoTop}>
        <Icons.ArrowUp color="black" />
      </Fab>
    </MainContainer>
  );
};

export default App;
