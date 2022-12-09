import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageContainer = styled.div`
  max-width: 100px;
  max-height: 100px;
  background-color: lightgray;
  border-radius: 50px;
  margin: 0 20px;
  @media (min-width: 1px) and (max-width: 480px) {
    margin: 0 4px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin: 0 10px;
  }
  img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50px;
  }
`;
const InfoContainer = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  text-align: center;
`;

const AboutMe = () => {
  return <AboutMeContainer>
    <ImageContainer>
      <img src="https://de-er.link/uploads/user/20221125073941_doyoung.JPG" />
    </ImageContainer>
    <InfoContainer>
      안녕하세요.<br/>
      웹 서비스 개발자 '<b>정도영</b>'입니다.<br/>
    </InfoContainer>
  </AboutMeContainer>;
};

export default AboutMe;