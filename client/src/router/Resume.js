import styled from 'styled-components';
import { Section } from '../styled/Router';
import { Visitor } from '../Components/CylandRight/Visitor';

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

const fullScreen = () => {
    document.querySelector("#video").play();
    document.querySelector("#play").style = "display:none;";
    document.querySelector("#video").setAttribute('controls', '');
}

const moveToVideo = time => {
    document.querySelector("#video").currentTime = time;
}

const Resume = () => {
    document.title = "Resume";

    const visitor =
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

            <Visitor no={1} visitor={visitor} />
        </Section>
    )
}

export default Resume;