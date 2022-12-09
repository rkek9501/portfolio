import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: top 0.4s ease;
  color: white;
  background-color: black;
  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
  padding: 0 200px;
  @media (min-width: 1px) and (max-width: 480px) {
    padding: 0 20px;
  }
  @media (min-width: 481px) and (max-width: 1000px) {
    padding: 0 60px;
  }
`;

const ProfileNav  = styled.nav`
  font-size: 1.4rem;
  ul {
    display: flex;
    flex-direction: row;
    li {
      padding: 0 8px;
      @media (min-width: 1px) and (max-width: 1000px) {
        padding: 0 4px;
      }
      a {
        color: white;
      }
    }
  }
  @media (min-width: 1px) and (max-width: 480px) {
    display: none;
  }
`;

const Header = ({ top, setHiddenHeader }: { top: string; setHiddenHeader: (isHidden: boolean) => void; }) => {
  return <HeaderContainer style={{ top }}>
    <div className="title">Doyoung's Space</div>
    <ProfileNav>
      <ul>
        <li onClick={() => setHiddenHeader(true)}><a href="#aboutme">AboutMe</a></li>
        <li onClick={() => setHiddenHeader(true)}><a href="#projects">Projects</a></li>
        <li onClick={() => setHiddenHeader(true)}><a href="#career">Career</a></li>
        <li onClick={() => setHiddenHeader(true)}><a href="#skills">Skills</a></li>
      </ul>
    </ProfileNav>
  </HeaderContainer>
};

export default Header;
