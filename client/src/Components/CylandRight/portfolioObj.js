import { ModalHuge, ModalFlag, ModalVom } from '../../modules/useModal';

export const huge = {
    classification: "【 Web Publishing 】",
    title: "HUGE Inc.",
    language: "HTML, CSS, JavaScript",
    description: "코딩 배운 후 첫번째 프로젝트 \n 박스모델과 DOM 구조에 대한 학습 \n 반응형과 자바스크립트 학습 후 디벨롭",
    study: "박스 모델, 미디어 태그, 클릭 이벤트, 조건문, Date 객체",
    range: "메인페이지 + 서브페이지 4개 / 반응형",
    img: "./images/portfolio/p1.jpg",
    link: {
        포트폴리오: "https://h-genie.github.io/hugeinc",
        코드: "https://github.com/H-Genie/hugeinc",
        박스모델: <ModalHuge />
    }
}

export const netflix = {
    classification: "【 Web Publishing 】",
    title: "NETFLIX",
    language: "HTML, CSS, JavaScript",
    description: "미디어쿼리 실습 프로젝트",
    study: "폼 태그, 반복문, CSS 반응형",
    range: "메인페이지 / 반응형",
    img: "./images/portfolio/p2.jpg",
    link: {
        포트폴리오: "https://h-genie.github.io/netflix",
        코드: "https://github.com/H-Genie/netflix"
    }
}

export const naver = {
    classification: "【 Web Publishing 】",
    title: "NAVER Corperation",
    language: "HTML, CSS, JavaScript",
    description: "자바스크립트 실습 프로젝트 \n 싱글 캐러셀 구현에 초점",
    study: "CSS 가상요소, 타이밍 이벤트, 이벤트 리스너",
    range: "메인페이지 / 반응형",
    img: "./images/portfolio/p3.jpg",
    link: {
        포트폴리오: "https://h-genie.github.io/naver",
        코드: "https://github.com/H-Genie/naver",
        캐러셀로직: "https://h-genie.github.io/study/javascript_slide.html"
    }
}

export const genesis = {
    classification: "【 Web Publishing 】",
    title: "GENESIS",
    language: "HTML, CSS, JavaScript",
    description: "과정 수료 후 웹퍼블리싱 종합 프로젝트 \n 멀티플 캐러셀 구현에 초점",
    study: "CSS 선택자 심화, 스크롤 이벤트, API 활용(유튜브)",
    range: "메인페이지 / 반응형",
    img: "./images/portfolio/p4.jpg",
    link: {
        포트폴리오: "https://h-genie.github.io/genesis",
        코드: "https://github.com/H-Genie/genesis",
    }
}

export const flag = {
    classification: "【 Front-end Development 】",
    title: "FLAG GAME",
    language: "HTML, CSS, JavaScript",
    description: "청기백기 게임 \n 웹사이트 이외의 자바스크립트 활용 연습 \n 백그라운드 로직 설계 연습",
    study: "Math 오브젝트, Switch문, 파라미터",
    range: "메인페이지, 백그라운드 로직, 반응형",
    img: "./images/portfolio/p5.jpg",
    link: {
        포트폴리오: "https://h-genie.github.io/flag-game",
        코드: "https://github.com/H-Genie/flag-game",
        로직: <ModalFlag />
    }
}

export const vom = {
    classification: "【 Full-stack Development 】",
    title: "VOM ACADEMY",
    language: "HTML, CSS, JavaScript, jQuery, PHP, MySQL",
    description: "실무 : 봄아카데미 홈페이지 개발 및 운영 \n 카페24 배포, HTTPS 인증서 적용 \n디자이너와 협업 (Adobe XD 활용) \n 검색엔진 등록 (구글, 네이버, 다음), 자동가입 방지 리캡챠 적용",
    study: "Create Element & Append Child, 모달 박스, This 키워드, Ajax, SQL CRUD, 세션 로그인, bycrypt, Mail 함수, 데이터베이스 설계",
    range: "메인페이지 6 + 서브페이지 9 + 관리자 페이지 + 백엔드 / 반응형",
    img: "./images/portfolio/p6.jpg",
    link: {
        사이트: "https://vomacademy.com",
        디자인가이드: "https://xd.adobe.com/view/d2c60d54-3c38-4f9b-76b2-f2bffc1012e4-a4f7",
        플로우차트: <ModalVom />
    }
}

export const todo = {
    classification: "【 Front-end Development 】",
    title: "To Do List App",
    language: "React, Firebase",
    description: "파이어베이스(구글 인증, 실시간 DB) 활용한 리액트 프로젝트 \n 로그인 & DB로 실제 활용 가능한 개인 투두 리스트 \n 기능 : 추가, 수정, 삭제, 순서변경",
    study: "React Hook, Firestore 데이터베이스, 구글 Authentication",
    range: "메인 컴포넌트",
    img: "./images/portfolio/p7.jpg",
    link: {
        포트폴리오: "https://h-genie.github.io/todo",
        코드: "https://github.com/H-Genie/todo"
    }
}

export const cyland = {
    classification: "【 Front-end Development 】",
    title: "CYLAND",
    language: "React, Firebase",
    description: "현재 사이트 \n 포트폴리오 소개 및 구직용",
    study: "React Router, 스타일 컴포넌트, Firestore 데이터베이스",
    range: "메인 컴포넌트 + 라우터 컴포넌트 3",
    img: "./images/portfolio/p8.jpg",
    link: {
        코드: "https://github.com/H-Genie/node.cyland"
    }
}

export const movieapp = {
    classification: "【 Front-end Development 】",
    title: "Movie App",
    language: "React",
    description: "TMDB API를 활용한 영화&배우 프로필 소개 페이지",
    study: "React Router, Ant Design, Axios, 배열 관리",
    range: "메인 컴포넌트 + 영화 상세 라우터 + 배우 상세 라우터",
    img: "./images/portfolio/p9.jpg",
    link: {
        포트폴리오: "https://genie-movieapp.herokuapp.com",
        코드: "https://github.com/H-Genie/movieapp"
    }
}

export const covid = {
    classification: "【 Front-end Development 】",
    title: "Covid-19 App",
    language: "React",
    description: "코로나 현황 API를 활용한 차트데이터 조회 페이지",
    study: "차트 활용(chart.js), 배열 정렬",
    range: "전세계 현황 컴포넌트 + 국가별 상세 차트 라우터",
    img: "./images/portfolio/p10.jpg",
    link: {
        포트폴리오: "https://genie-covid.herokuapp.com",
        코드: "https://github.com/H-Genie/covid"
    }
}