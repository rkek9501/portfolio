import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-y: none;
  @media (min-width: 1px) and (max-width: 480px) {
    flex-direction: column;
    overflow-y: scroll;
    height: 100%;
  }
`;

const MainProfileArea = styled.div`
  height: 100vh;
  min-width: 270px;
  transition: 500ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .profile-img {
    width: 100px;
    height: 100px;
    background-color: lightgray;
    border-radius: 50px;
  }
  .title {
    text-align: center;
    font-size: 40px;
  }

  @media (min-width: 1px) and (max-width: 480px) {
    min-width: 100vw;
    height: 200px;
  }
`;

const ProfileInfo  = styled.nav`
  font-size: 24px;
  min-width: 200px;
  margin-top: 20px;
  li a {
    color: var(--md-ref-palette-primary40);
  }
  li a:hover {
    color: var(--md-ref-palette-primary20);
  }
  @media (min-width: 1px) and (max-width: 480px) {
    display: none;
  }
`;

const MainContentsArea = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex: 1;
  flex-direction: column;
  scroll-behavior: smooth;
  @media (min-width: 1px) and (max-width: 480px) {
    overflow-y: none ;
  }
`;

const ContentBox = styled.div`  
  width: 100%;
  min-height: 500px;
  padding: 10px;
  #aboutme {

  }
  #archiving {

  }
  #skills {

  }
  #projects {
  
  }
  #career {

  }
`;

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const contentLoaded = useRef(null);
  const profileWidth = scrolled ? "30vw" : "50vw";

  useEffect(() => {
    if (contentLoaded?.current) {
      const scroller = document.getElementById("main-contents");
      const onScroll = () => {
        const scrollTop = scroller?.scrollTop || 0;
        if (scrollTop > 0) setScrolled(true);
        else setScrolled(false);
      };
      scroller?.addEventListener("scroll", onScroll, false);
      return () => scroller?.removeEventListener("scroll", onScroll, false);
    } else {
      return () => {};
    }
  }, [contentLoaded]);

  return (
    <MainContainer>
      <MainProfileArea className="surface-variant on-surface-variant-text" style={{ width: profileWidth }}>
        <div className="profile-img"></div>
        <div className="title">Doyoung's Space</div>
        <ProfileInfo>
          <ul>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#archiving">Archiving</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#career">Career</a></li>
          </ul>
        </ProfileInfo>
      </MainProfileArea>
      <MainContentsArea id="main-contents" className="primary-text" ref={contentLoaded}>
        <ContentBox id="aboutme" className="about-me primary-text">About Me</ContentBox>
        <ContentBox id="archiving" className="my-archive secondary-container on-secondary-container-text">Archiving</ContentBox>
        <ContentBox id="skills" className="my-skills primary-text">Skills</ContentBox>
        <ContentBox id="projects" className="my-projects tertiary-container on-tertiary-container-text">Projects</ContentBox>
        <ContentBox id="career" className="my-career primary-text">Career</ContentBox>
      </MainContentsArea>
    </MainContainer>
  );
};

export default App;
