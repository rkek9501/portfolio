import React, { Fragment } from 'react';
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
  font-size: 1.6rem;
  padding: 10px 20px;
  word-break: keep-all;
`;
const TimelineTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Company = styled.div`
  text-align: right;
  font-weight: bold;
  font-size: 1.6rem;
  width: ${CompanyWidth.pc};
  @media (min-width: 1px) and (max-width: 480px) {
    width: ${CompanyWidth.mobile};
  }
  @media (min-width: 481px) and (max-width: 1000px) {
    width: ${CompanyWidth.tablet};
  }
`;
const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: gray;
  margin: 0 10px;
  `;
const Label = styled.div`
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
  padding-bottom: 10px;
  .part {
    padding-left: 16px;
  }
`;

const Timeline = (props: { datas: CareerOfCompanyData[] }) => {
  return <TimelineMainContainer>
    {props.datas?.slice(0).reverse().map((companyData: CareerOfCompanyData, i: number) => {
      return <Fragment key={i}>
        {companyData.careers?.slice(0).reverse().map((career: CareersData, k: number) => {
          return <Fragment key={k}>
            <TimelineTitleRow>
              <Company>{k === 0 && companyData.company}</Company>
              <Dot/>
              <Label>{career.label}</Label>
            </TimelineTitleRow>
            <TimelineDataRow style={{marginBottom: 0}}>
              <Line />
              <Text>
                - 기간 : {career.period}
              </Text>
            </TimelineDataRow>
            <TimelineDataRow>
              <Line />
              <Text>
                - 담당업무 : <br/>
                <div className="part">{career.text}</div>
                {/* <Skills skills={career?.skills} withoutIcon /> */}
              </Text>
            </TimelineDataRow>
          </Fragment>
        })}
      </Fragment>
    })}
  </TimelineMainContainer>
};

export default Timeline;