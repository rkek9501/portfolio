import React, { Fragment, ReactElement } from 'react';
import styled from 'styled-components';

// import Skills from '@compoents/Skills';
import type { CareerOfCompanyData, CareersData } from '@datas/careers';

const CompanyWidth = {
  pc: "100px",
  tablet: "80px",
  mobile: "50px",
};

const TimelineMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  padding: 10px 20px;
  word-break: keep-all;
`;
const TimelineTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0.4rem 0;
`;
const CareerText = styled.h2`
  font-weight: bold;
  font-size: 1.4rem;
  padding-left: 10px;
  width: ${CompanyWidth.pc};
  @media (min-width: 1px) and (max-width: 480px) {
    &.career {
      width: ${CompanyWidth.mobile};

    }
  }
  @media (min-width: 481px) and (max-width: 1000px) {
    width: ${CompanyWidth.tablet};
  }
`;
const Company = styled.h2`
  font-weight: bold;
  font-size: 1.6rem;
`;
const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: gray;
  margin: 0 10px;
  margin-top: 0;
  `;
const Label = styled.h3`
  font-weight: bold;
`;
const TimelineDataRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: ${CompanyWidth.pc};
  @media (min-width: 1px) and (max-width: 480px) {
    padding-left: ${CompanyWidth.mobile};
  }
  @media (min-width: 481px) and (max-width: 1000px) {
    padding-left: ${CompanyWidth.tablet};
  }
`;
const Line = styled.div`
  width: 2px;
  margin: 0 15px;
  background-color: lightgray;
`;
const Text = styled.div`
  padding-left: 16px;
  padding-bottom: 4px;
  .part {
    padding-left: 8px;
    margin-bottom: 16px;
  }
`;
const WorkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px 0;
  @media (min-width: 1px) and (max-width: 480px) {
    flex-direction: column; 
  }
`;

const Work = (career: { label?: string; text?: ReactElement | null; }) => {
  return <WorkContainer style={{  }}>
    <CareerText>{career.label}</CareerText>
    <Text>{career.text}</Text>
  </WorkContainer>
}

const CareerRow = (career: { label?: string; text?: string | null; }) => {
  if(!career.text) return null;
  return <TimelineDataRow style={{marginBottom: 0}}>
    <Line />
    <Text>{career.label} : {career.text}</Text>
  </TimelineDataRow>
}

const Timeline = (props: { datas: CareerOfCompanyData[] }) => {
  return <TimelineMainContainer>
    {props.datas?.slice(0).reverse().map((companyData: CareerOfCompanyData, i: number) => {
      return <Fragment key={i}>
        <div style={{display: "flex", flexDirection: "row"}}>
          <Company>{companyData.company}</Company>
          <Text style={{paddingLeft: 10}}>{companyData.period}</Text>
        </div>

        <Work label='업무 성과' text={companyData.workResult} />
        <Work label='주요 업무' text={companyData.mainWork} />

        {companyData.careers?.slice(0).reverse().map((career: CareersData, k: number) => {
          return <Fragment key={k}>
            <TimelineTitleRow>
              <CareerText className="career">{k === 0 && "경력"}</CareerText>
              <Dot/>
              <Label>{career.label}</Label>
            </TimelineTitleRow>

            <CareerRow label='기간' text={career.period} />
            <CareerRow label='기술 스택' text={career.skills?.join(", ")} />
            <CareerRow label='개발 인원' text={career.persons ? `${career.persons}명` : null} />
            
            <TimelineDataRow>
              <Line />
              <Text>
                담당업무 : <br/>
                <p className="part">{career.text}</p>
              </Text>
            </TimelineDataRow>
          </Fragment>
        })}
      </Fragment>
    })}
  </TimelineMainContainer>
};

export default Timeline;