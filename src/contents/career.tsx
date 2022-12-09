import React from 'react';
import styled from 'styled-components';
import Timeline from '../components/Timeline';
import Careers from '../datas/careers';

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.div`
  margin: 10px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const Career = () => {
  return <ContentsContainer>
    <ContentTitle>Career</ContentTitle>
    <Timeline datas={Careers}/>
  </ContentsContainer>;
};

export default Career;
