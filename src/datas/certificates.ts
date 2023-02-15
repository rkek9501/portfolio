export type CertificatesType = {
  name: string;
  date: string;
  authorities: string;
};

const Certificates: CertificatesType[] = [{
  name: "정보처리기사",
  date: "2021.06",
  authorities: "한국산업인력공단"
}, {
  name: "정보처리산업기사",
  date: "2018.08",
  authorities: "한국산업인력공단"
}];

export default Certificates;