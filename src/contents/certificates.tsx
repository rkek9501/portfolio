import React from "react";
import styled from 'styled-components';

import CertificateData, { CertificatesType } from "@datas/certificates";

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.h1`
  margin: 10px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const CertificatesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
`;
const CertificatesName = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  min-width: 120px;
`;
const CertificatesInfo = styled.div`
  font-size: 1.4rem;
`;

const CertificatesList = () => {
  return <>{CertificateData.map((item: CertificatesType, i: number) => {
    return <CertificatesWrapper key={i}>
      <CertificatesName>
        {item.name}
      </CertificatesName>

      <CertificatesInfo>
        &nbsp;({item.date} / {item.authorities})
      </CertificatesInfo>
    </CertificatesWrapper>
  })}</>
}

const Certificates = () => {
  return <ContentsContainer>
    <ContentTitle>Certificates</ContentTitle>
    <CertificatesList />
  </ContentsContainer>;
}

export default Certificates;