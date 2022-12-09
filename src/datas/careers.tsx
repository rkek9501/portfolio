import React, { ReactElement } from 'react';

export type CareersData = {
  label: string;
  period?: string;
  text?: ReactElement;
  skills?: string[];
}
export type CareerOfCompanyData = {
  company: string;
  careers: CareersData[];
};

const CareerData: CareerOfCompanyData[]  = [{
  company: "Cedar",
  careers: [{
    label: "안드로이드 기반의 주류 도매사 그룹웨어 앱 개발",
    period: "2018 ~ 2019.06", //period: "2018 ~ 2019.04",
    text: <>
      - 위치 기반의 출퇴근 처리 화면 개발<br/>
      - 위치 기반의 업무보고 및 결제 화면 개발<br/>
      - 거래처 조회, 거래처의 주문내역 및 배송내역 조회 화면 개발<br/>
      - Google API(Dynamic Maps, Geocoding) 연동<br/>
      - 도매사 입금문자 수신 앱 리뉴얼<br/>
      - 크래시 리포트(Fabric) 연동 및 관리<br/>
        &emsp; (Fabric은 현재 Firebase Crashlytics에 통합됨)<br/>
      - Googel Play 출시 관리<br/>
      - 해당 안드로이드 프로젝트의 구조 설계 및 리팩토링<br/>
    </>,
    skills: ["Java", "Android", "Postman", "Fabric"]
  }, {
    label: "브라우저 기반의 주류광고 플랫폼 개발",
    period: "2019.04 ~ 2019.07",
    text: <>
      - 프로젝트 구조 설계<br/>
      - 주류 주문 및 장바구니 개발<br/>
      - 주문 통계 조회 개발<br/>
      - 크래시 리포트 Sentry 연동 및 관리<br/>
    </>,
    skills: ["Javascript", "React-Native", "Expo", "Sentry"]
  }, {
    label: "스마트 오피스 프로젝트(개인)",
    period: "2019.06 ~ 2019.07",
    text: <>
      - Slack을 활용한 사내 냉난방기기 제어<br/>
      - Slack의 메세지 수신시 Arduino를 통해 냉난방 신호 송신<br/>
    </>,
    skills: ["C#", "Arduino", "Slack"]
  }, {
    label: "동물용 의약품 관리자교육 예약 및 관리 프로젝트",
    period: "2019.08 ~ 2021.01",
    text: <>
      - 로그인, 회원가입, 회원관리 기능 개발<br/>
      - 이메일, 문자메시지 발송 기능 개발<br/>
      - 프로젝트 인수인계 문서정리 및 이관<br/>
    </>,
    skills: ["Javascript", "React", "Electron", "Nodejs", "Mysql", "AWS"]
  }, {
    label: "서울 지방 경찰청 키오스크 프로젝트",
    period: "2019.12 ~ 2020.02",
    text: <>
      - 웹 기반의 키오스크 컨텐츠 디스플레이 개발<br/>
      - 웹 기반의 컨텐츠 관리 기능 개발<br/>
      - 내부망 서버 세팅 및 납품<br/>
    </>,
    skills: ["Javascript", "React", "Electron", "Nodejs", "Mysql", "PM2", "Nginx"]
  }, {
    label: "수협방송 관리 프로젝트",
    period: "2020.01 ~ 2020.05",
    text: <>
      - 방송용, 광고용 컨텐츠 업로드 및 관리 기능 개발<br/>
      - 뉴스 기사 데이터 연동<br/>
      - 공공데이터 포털 날씨 API 연동<br/>
    </>,
    skills: ["Typescript", "Nextjs", "Nodejs", "Apollo-Graphql", "Mysql", "AWS"]
  }, {
    label: "LGU+ 무인키오스크 프로젝트",
    period: "2020.05 ~ 2021.04",
    text: <>
      유심개통부터 요금조회, 요금납부 등을 비대면으로 처리하기 위한 키오스크 개발<br/>
      - 유심(LGU+, 알뜰폰) 개통 기능 개발<br/>
      - LGU+ 내부 API, ESB 연동<br/>
      - 기존 광고 솔루션과 키오스크 페이지 통신 연동<br/>
      - 키오스크와 모듈간 통신 연동<br/>
      - 번역 기능 개발<br/>
      - 관리자 개통 통계 페이지 개발<br/>
    </>,
    skills: ["Javascript", "React", "Webpack", "Electron", "Nodejs", "Mysql", "Redis"]
  }, {
    label: "삼양 공장 내부망 솔루션 리뉴얼",
    period: "2021.05 ~ 2022.02",
    text: <>
      - 기존 솔루션을 내부망에서 동작하도록 리뉴얼<br/>
      &emsp;(관리자 페이지 / 디스플레이 PC 앱)<br/>
      &emsp; - Amazon ECS를 통한 Docker 배포 환경구성<br/>
    </>,
    skills: ["Javascript", "React", "Electron", "Nodejs", "Mysql", "Docker", "Nginx", "Redis"]
  }, {
    label: "판교 테크원 길안내 키오스크 프로젝트",
    period: "2021.08 ~ 2022.03",
    text: <>
      - 건물 BEMS 화면 개발<br/>
      - 건물 BEMS, 주차 데이터 API 연동<br/>
      - 건물 매장정보 데이터베이스 설계 및 연동<br/>
      - 공공데이터 포털 날씨 API 연동<br/>
      - Android 앱에 NTP 서버 연동 기능 추가 및 앱 빌드 관리<br/>
    </>,
    skills: ["Javascript", "React", "Cordova", "Nodejs", "AWS", "Mysql", "Mssql"]
  }, {
    label: "신규 사내 솔루션 개발",
    period: "2022.03 ~ 2022.08",
    text: <>
      - Nextjs 기반의 전체적인 관리자용 페이지 개발 담당<br/>
      - 관리자용 Windows 앱(Electron) 개발<br/>
        &emsp; - 영상 인코딩 기능 개발<br/>
      - Github 워크프로우를 통한 서버 자동 배포 환경 구성<br/>
    </>,
    skills: ["Typescript", "Nextjs", "Apollo-Graphql", "Github", "Jira", "Storybook", "Electron"]
  }]
}];

export default CareerData;
