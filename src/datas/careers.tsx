import React, { ReactElement } from 'react';

export type CareersData = {
  label: string;
  period?: string;
  text?: ReactElement;
  persons?: number;
  skills?: string[];
}
export type CareerOfCompanyData = {
  company: string;
  period?: string;
  mainWork: ReactElement;
  workResult: ReactElement;
  careers: CareersData[];
};

const CareerData: CareerOfCompanyData[]  = [{
  company: "주식회사 시더",
  period: "2018.11 ~ 2022.08 (3년 10개월)",
  workResult: <>
    • 영상 인코딩 프로세스 개선<br/>
    • 템플릿 미리보기 기능 개선<br/>
    • 내부망 납품용 서버PC 세팅 시간 최소화<br/>
    &emsp;- 납품용 내부망 서버PC에 쉽게 환경 세팅을 하기 위한 Docker 배포 환경구성<br/>
    • 서버 테스트,빌드 및 배포 시간 단축 (20분 → 5분)<br/>
  </>,
  mainWork: <>
    • 웹 서버 개발 (NodeJs)<br/>
    • 웹 클라이언트 개발 (React, NextJs, typescript)<br/>
    • 안드로이드 클라이언트 개발 (Java, React-Native)<br/>
    • 외부(공공데이터, 협력업체 등) API 연동<br/>
  </>,
  careers: [{
    label: "안드로이드 기반의 주류 도매사 그룹웨어 앱 개발",
    period: "2018.09~ 2019.06 (약 10개월)",
    skills: ["Java", "Android(Native)", "Postman", "Fabric"],
    persons: 2,
    text: <>
      <b>위치 기반의 출퇴근 처리 화면 개발</b><br/>
      • 위치 기반의 업무보고 및 결제 화면 개발<br/>
      • 거래처 조회, 거래처의 주문내역 및 배송내역 조회 화면 개발<br/>
      • Google API(Dynamic Maps, Geocoding) 연동<br/>
      • 크래시 리포트(Fabric) 연동 및 관리<br/>
      • Google Play 출시 및 업데이트 관리<br/>
    </>,
  }, {
    label: "브라우저 기반의 주류광고 플랫폼 개발",
    period: "2019.04 ~ 2019.07 (약 4개월)",
    skills: ["Javascript", "React Native", "Expo", "Git", "Sentry"],
    persons: 3,
    text: <>
      <b>애플리케이션(주고) 개발</b><br/>
      • 주류 주문, 장바구니 및 주문 통계 개발<br/>
      • 크래시 리포트 Sentry 연동 및 관리<br/>
    </>,
  }, {
    label: "스마트 오피스 프로젝트(사내 개인 프로젝트)",
    period: "2019.06 ~ 2019.07 (약 2개월)",
    skills: ["Arduino", "C#"],
    persons: 1,
    text: <>
      <b>아두이노를 통한 냉난방기기 제어</b>
    </>,
  }, {
    label: "동물용 의약품 관리자교육 예약 및 관리 프로젝트",
    period: "2019.08 ~ 2021.01 (개발 6개월 / 유지보수 12개월)",
    skills: ["AWS EC2", "Javascript", "React", "Nodejs", "Mysql", "AWS"],
    persons: 2,
    text: <>
      <b>회원관리 관련 기능 개발, 유지보수</b><br/>
      • 이메일, 문자메시지 발송 기능 개발<br/>
      • 프로젝트 인수인계 문서정리 및 이관<br/>
    </>,
  }, {
    label: "서울 지방 경찰청 키오스크 프로젝트",
    period: "2019.12 ~ 2020.02 (약 3개월)",
    skills: ["Ubuntu Server", "Javascript", "React", "Nodejs", "Mysql", "PM2", "Nginx"],
    persons: 1,
    text: <>
      • 웹 기반의 키오스크 컨텐츠 디스플레이 개발<br/>
      • 웹 기반의 컨텐츠 관리 기능 개발<br/>
      • 내부망 서버 세팅 및 납품<br/>
    </>,
  }, {
    label: "수협은행 방송 솔루션 프로젝트",
    period: "2020.01 ~ 2020.05 (약 5개월)",
    skills: ["Typescript", "Nextjs", /*"styled-component",*/ "Nodejs", "Mysql", "Docker", "AWS"],
    persons: 5,
    text: <>
      <b>수협은행 콘텐츠 관리 및 편성 웹 서비스 개발</b><br/>
      • 수협은행 내부 송출용 콘텐츠 업로드 및 관리 기능 개발<br/>
      • 광고용 콘텐츠 업로드 및 관리 기능 개발<br/>
      • 최신 뉴스 기사 크롤링, DB 저장 및 송출<br/>
      • 최신 뉴스 및 안내 메시지 템플릿 성능 최적화<br/>
      • 공공데이터 포털 날씨 API 연동<br/>
    </>,
  }, {
    label: "LGU+ 무인 키오스크 프로젝트",
    period: "2020.05 ~ 2021.04 (약 12개월)",
    skills: ["Javascript", "React", "Nodejs", "Electron", "Git", "Mysql"],
    persons: 8,
    text: <>
      <b>유심개통부터 요금조회, 요금납부 등을 비대면으로 처리하기 위한 키오스크 개발</b><br/>
      • LG U+ 유심개통 등 개통 기능 개발 (선/후불, +알뜰폰)<br/>
      • 키오스크와 모듈간 통신 인터페이스 정의 및 연동<br/>
      • 기존 광고 솔루션과 키오스크 페이지 통신 연동<br/>
      • API, ESB 연동<br/>
      &emsp;1. LGU+ 내부 API, ESB 연동 중개 서버 개발<br/>
      &emsp;2. 알뜰폰 결제 API 연동<br/>
      • 관리자 홈페이지 개통 통계 페이지 개발<br/>
      • 페이지 방문 기록 관리 및 저장 기능 개발<br/>
    </>,
  }, {
    label: "내부망 솔루션 리뉴얼",
    period: "2021.05 ~ 2022.02 (약 10개월)",
    skills: ["Ubuntu Server", "Docker", "Nodejs", "AWS ECS", "Nginx"],
    persons: 3,
    text: <>
      <b>기존 솔루션 내부망용 리뉴얼</b><br/>
      • 서버PC 세팅 시간 최소화 • Docker 배포 환경구성<br/>
      • 미리보기 서비스 성능 개선<br/>
      • 내부망 동작 세팅 및 내부망 환경 테스트<br/>
    </>,
  }, {
    label: "판교 테크원 길안내 키오스크 프로젝트",
    period: "2021.08 ~ 2022.03 (약 8개월)",
    skills: ["Javascript", "React", "Git", "Android(Native)", "Mysql", "Mssql"],
    persons: 3,
    text: <>
      <b>기존 솔루션에서 추가적인 건물 BEMS용 템플릿 제작</b><br/>
      • 외부 API연동<br/>
      • 건물 BEMS, 주차 정보 조회, 공공데이터 포털 날씨 API연동<br/>
      • 건물 매장정보 및 길찾기 데이터베이스 설계 및<br/>
      • 내부망 건물 매장정보 DB 동기화 처리 (Mysql ↔ Mssql)<br/>
      • Android 앱 내부망 NTP 서버 연동 기능 추가 및 앱 빌드 관리<br/>
    </>,
  }, {
    label: "신규 솔루션 개발",
    period: "2022.03 ~ 2022.08 (약 6개월)",
    skills: ["Typescript", "Nextjs", /*"styled-component", "tailwindCSS", "PostCSS",*/ "Github", "Jira"],
    persons: 5,
    text: <>
      <b>Front-End 개발 리드</b>
      • Next.js 기반의 관리자용 페이지 개발 담당<br/>
      • 테스트, 빌드 및 배포 시간 단축 (20분 → 5분)<br/>
      &emsp;- Github 워크플로우를 통한 서버 자동 배포 환경 구성<br/>
      • 영상 인코딩 프로세스 개선<br/>
      {/* &emsp; 기존에는 서버에서 동작하던 인코딩 작업을 서버의 부하를 줄이기 위해 클라이언트에서 동작가능하도록 개선<br/> */}
    </>
  }]
}];

export default CareerData;
