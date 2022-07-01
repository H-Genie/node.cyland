import React from 'react';
import styled from 'styled-components';
import Visitor from '../Components/RightInterior/visitor/Visitor';
import { Section } from '../styled/Router';

const Resume = () => {
    document.title = "Resume";

    const fullScreen = () => {
        document.querySelector("#video").play();
        document.querySelector("#play").style = "display:none;";
        document.querySelector("#video").setAttribute('controls', '');
    }

    const moveToVideo = time => {
        document.querySelector("#video").currentTime = time;
    }

    const resume = (
        <>
            <br />
            <h6>동영상 버전의 이력서 입니다. </h6>
            <br />
            <h6>상세한 신상정보가 포함된 PDF본 이력서는 지원서에 첨부하였습니다.</h6>
            <br />
            <br />

            <P onClick={() => moveToVideo(10)}>▶ Career (0:10)</P>
            <br />
            <P onClick={() => moveToVideo(23)}>▶ Office Automation Skills (0:23)</P>
            <br />
            <P onClick={() => moveToVideo(43.5)}>▶ Office Automation Portfolio (0:43)</P>
            <br />
            <P onClick={() => moveToVideo(141)}>▶ Coding Skills & Portfolio(2:21)</P>
            <br />
        </>
    );

    const stack = (
        <>
            <br />
            <h4>Tech Stack</h4>
            <br />
            <h6>
                자바스크립트 기반의 풀스택 개발자가 되는 것을 목표로 <br />
                끊임없이 노력중입니다.
            </h6>
            <br /><br />
            <p>
                ❏ 퍼블리싱 : 디자인 가이드 그대로 구현 가능 (반응형 포함) <br /><br />
                ❏ 자바스크립트 : 함수와 이벤트로 자유로운 DOM 조작 <br /> &nbsp;&nbsp; / 배열 및 객체 관리로 백그라운드 로직 설계 <br /><br />
                ❏ 리액트 : 상태관리, 데이터 페칭으로 SPA 구성 가능<br /><br />
                ❏ 타입스크립트 : 리액트 프로젝트에 세팅 가능<br /><br />
                ❏ Node.js : Mongo DB를 활용한 기초적인 REST API 설계 가능
            </p>
            <br />
        </>
    );

    return (
        <Section>
            <VideoContainer>
                <Video poster="./images/poster.jpg" id="video" muted loop playsInline preload="none">
                    <source src="./images/resume.mp4" type="video/mp4" />
                </Video>
                <Play id="play" onClick={fullScreen}>
                    &#9654;
                </Play>
            </VideoContainer>

            <Visitor no={1} content={resume} />
            <Visitor no={2} content={stack} />
        </Section>
    )
}

export default Resume;

const VideoContainer = styled.div`
    width : 725px;
    height : 407px;
    border : 5px solid #85c8f2;
    box-shadow : 10px 10px #85c8f2;
    box-sizing : content-box;
    position : relative;
    margin-bottom : 30px;
`;

const Video = styled.video`
    width : 100%;
    outline : none;
`;

const Play = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor : pointer;
`;

const P = styled.p`
    width : fit-content;
    cursor : pointer;
`;