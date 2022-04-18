import React from 'react';
import { Section } from '../styled/Router';
import Visitor from '../Components/RightInterior/visitor/Visitor';
import * as contents from '../Components/RightInterior/contents/portfolioContents';
import { CarouselPortfolio } from '../modules/useCarousel';

const Portfolio = () => {
    document.title = "Portfolio";

    const notice = (
        <>
            <br />
            <p>포트폴리오는 중요도 순서가 아닌, 진행한 순서대로 기재했습니다.</p>
            <br />
            <p>퍼블리싱 프로젝트 4개, 실무 1개, 프론트엔드 프로젝트 5개</p>
            <br />
            <CarouselPortfolio />
            <br />
        </>
    );

    return (
        <Section>
            <Visitor no={0} content={notice} notice={true} />
            {
                Object.values(contents).map((portfolio, index) => (
                    <Visitor
                        key={index + 1}
                        no={index + 1}
                        content={portfolio}
                        type={"portfolio"}
                    />
                ))
            }
        </Section>
    )
}

export default Portfolio;