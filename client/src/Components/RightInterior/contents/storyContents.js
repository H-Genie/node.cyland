import React from 'react';
import styled from 'styled-components';
import { CarouselStory } from '../../../modules/useCarousel';

const P = styled.p`
    font-family : 'SCDream3';
    font-size : 20px;
    line-height : 32px;

    span {
        font-size : 22px;
        font-family : 'SCDream5';
    }
`;

const BoxShadow = styled.div`
    width : fit-content;
    border : 1px solid rgb(108,108,108);
    padding : 10px;
    box-shadow : 10px 10px rgb(108,108,108);

    font-family : 'SCDream3';
    font-size : 20px;
    line-height : 32px;
`;

const Running = styled.div`
    width : 480px;

    img {width : 33.3%;}
`;

const Iframe = styled.iframe`
    box-shadow: 10px 10px #a10448;
    border: 5px solid #ec0c6d;
`;

export const story1 = (
    <>
        <br />
        <br />
        <P>
            2019년까지 사무직에 종사하다가, 코딩을 하고 싶어
            2020년 2월부터 7월까지 국비지원 웹퍼블리싱 과정을 수료하였습니다. <br /><br />

            수료한 학원에서 개발자로 일할 기회를 주셔서,
            6개월동안(청년 디지털 일자리사업) 홈페이지 개발 및 운영을 하였습니다. <br /><br />

            그후 포트폴리오를 정비하며 다음과 같은 것들을 연습하였습니다. <br /><br />

            ❏ <span>퍼블리싱</span> : 디자인 가이드 그대로 구현 가능 <br />
            ❏ <span>자바스크립트</span> : 함수와 이벤트로 자유로운 DOM 조작 <br /> &nbsp;&nbsp; / 배열 및 객체관리로 백그라운드 로직 설계 <br />
            ❏ <span>리액트</span> : Hook, Axios로 외부 데이터를 연동한 SPA 구성 가능<br />
            ❏ <span>Node.js</span> : Mongo DB를 사용한 기초적인 스키마, 라우터 관리 <br /><br />

            자바스크립트 기반의 풀스택 개발자가 되는 것을 최종 목표로 끊임없이 노력중입니다.
        </P>
        <br />
    </>
);

export const story2 = (
    <>
        <br />
        <h4>개발자가 되기로 결심한 계기</h4>
        <br /><br />
        <P>
            어린 시절부터 <span>누군가를 돕는 것</span>에 즐거움을 많이 느꼈습니다.
            그래서 많은 사람을 돕고 싶다는 일념으로 행정학과를 진학했고 한때 공무원을 꿈꿨습니다. <br /><br />

            직장인이 되어서도 경영지원스탭을 했던 것도 나로 인해 직원들이 좋은 환경에서 일할 수 있고,
            그로 인해 회사가 성장할 수 있다면 그것에 보람을 느낄 수 있었기 때문입니다. <br /><br />

            하지만, 짧은 직장생활동안 타인을 돕는 역할보다는 맹목적으로 경영진의 지시를 따르는 일이 더 많았고,
            그것이 경영지원 스탭의 숙명이라는 것을 알았을 때, 새로운 직업을 가져야겠다는 결심을 했습니다. <br /><br />

            결국 좋은 이상을 품고 있더라도 그것을 실행할 <span>실력</span>이 없다면 소용없다는 것을 느꼈습니다. <br /><br />

            "나의 능력으로 <span>많은 사람들을 이롭게</span> 할 수 있는 일"을 탐구하던 중 저의 욕구와 발전방향이 일치하는 것이 <span>코딩</span>이라는 것을 알게 되었고,
            주변의 만류에도 불구하고 지체없이 회사를 그만두고 코딩에 도전하게 되었습니다.
        </P>
    </>
);

export const story3 = (
    <>
        <br />
        <h4>어떤 개발자가 되고 싶은지?</h4>
        <br /><br />
        <P><span>{`<가슴이 따뜻한 개발자>`}</span></P>
        <br />
        <P>
            코딩의 가장 큰 매력은 블루오션 분야인것 이라고 생각합니다. <br />
            지금 이 순간에도 끊임없이 <span>새로운 기술</span>들이 발전하고 있고, <br />
            <span>노력하여 성취</span>할 수만 있다면 누구라도 진입장벽 없이 경쟁할 수 있다고 생각합니다. <br /><br />

            또다른 매력은 인터넷이라는 어마어마한 것을 무기로 한다는 점입니다.
            만일 제가 공무원 혹은 회사원으로써 승승장구 했다면 저의 영향력은 대한민국 내, 회사 내 혹은 일부 지역사회에 한정됐을 겁니다.
            원료, 생산, 유통, 영업 걱정없이 컴퓨터와 <span>아이디어</span>만 있다면 이제는 <span>전세계 사람들을 대상</span>으로 쇼타임을 벌일 수 있다는 것이 너무나도 가슴뛰게 합니다. <br /><br />

            얼마전 '다시 한번'이라는 TV 프로그램에서 인공지능 기술로 故 터틀맨의 목소리를 완벽하게 재현해내 많은 사람들에게 감동을 주었습니다. <br /><br />

            <Iframe
                width="480"
                height="270"
                src="https://www.youtube.com/embed/Jm0s0CEEd3Q"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
                title="turtleman"
            ></Iframe>
            <br /><br />

            세상엔 드러나지 않은 <span>수많은 수요</span>들이 있습니다. 그것은 문제를 해결하는 것일 수도 있고, 더 나은 삶을 위한 것일수도 있습니다. <br /><br />
            저의 기술로 인해 많은 사람들이 좀더 <span>편리한 생활</span>을 할 수 있고, <span>문제를 해결</span>할 수 있고, <span>웃음과 감동</span>을 얻을 수 있다면 큰 보람을 느낄 것입니다. <br /><br />

            엔지니어는 차갑고 이성적일 것이라는 선입견이 있습니다. 하지만, 저는 <span>가슴이 따뜻하고 주변에 귀를 기울일</span> 수 있는 개발자가 되고 싶습니다.
        </P>
    </>
);

export const story4 = (
    <>
        <br />
        <h4>나란 사람은?</h4>
        <br /><br />
        <P>
            ❏ MBTI <br /><br />

            흔히들 한번 하고 넘어갈 성격테스트라고 생각할 수 있습니다. 저는 어렸을때부터 '나는 왜 이럴까?'라는 고민이 많았습니다. <br /><br />
            하지만 MBTI를 알고 난 후, '나는 원래 이런사람이구나'라는 것을 알고 심리적으로도 편해졌고 자존감도 높아졌습니다. <br /><br />

            저는 <span>선의의 옹호자, 예언자</span>로 알려진 <span>INFJ</span> 유형입니다. <br />
            INFJ 유형의 사람들은 다음과 같은 특징을 가지고 있습니다. <br />
        </P>
        <br />
        <BoxShadow>
            ㆍ 인내심이 많고, 직관력이 뛰어남 <br />
            ㆍ 강한 직관력으로 타인에게 좋은 영향을 끼치려 함 <br />
            ㆍ 창의력이 좋음 <br />
            ㆍ 신념과 열정으로 자신의 영감을 구현 <br />
            ㆍ 공감능력이 좋고 경청을 잘함
        </BoxShadow>
        <br /><br />
        <P>
            ❏ 취미 : 런닝 <br /><br />

            2019년에 친구의 권유로 시작하여 특별하게 날씨가 나쁘지 않다면 매일 5km씩 뛰고 있습니다.
            시원한 바람을 맞으며 달릴때면 몸도 가벼워지고, 근심걱정도 사라지는 느낌이 너무 좋습니다. <br /><br />
            타고난 신체가 강하지 않아 나이를 먹을수록 체력 걱정이 많았지만, 런닝을 시작한 이후로 나날이 좋아지고 있는 것을 느낍니다.
            (코로나가 종식되면) 연 2회 이상의 대회 참여를 목표로 하고 있습니다. <br />
        </P>
        <Running>
            <img src="https://h-genie.github.io/cyland/public/index/page4/running1.jpg" alt="running" />
            <img src="https://h-genie.github.io/cyland/public/index/page4/running2.jpg" alt="running" />
            <img src="https://h-genie.github.io/cyland/public/index/page4/running3.png" alt="running" />
        </Running>
        <br />
        <P>
            ❏ 취미 : 해외여행 <br /><br />

            여행의 목적은 모두들 다르겠지만, 저에게 여행은 <span className="upper">'배움'</span>입니다.
            다양한 문화와 관습을 느끼며, 세상에 정말 많은 것들이 공존하고 있고 그것들 모두 소중하다는 '겸손함'을 느낍니다. <br /><br />
            그래서 나 자신의 관점에 갖히기 보다는 더 <span className="emphasis">유연하고 관대한 사람</span>이 되겠다는 소중한 기회를 갖게됩니다. <br /><br />

            2016년에 첫 해외여행을 간 이래, 5년간 9개국 19개 도시를 방문했습니다. <br />
        </P>
        <CarouselStory />
    </>
);