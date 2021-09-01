import { Section } from '../styled/Router';
import { Visitor, VisitorPortfolio } from '../Components/CylandRight/Visitor';
import * as obj from '../Components/CylandRight/portfolioObj';
import { CarouselPortfolio } from '../modules/useCarousel';

const Portfolio = () => {
    document.title = "Portfolio";

    const notice =
        <>
            <br />
            <p>포트폴리오는 중요도 순서가 아닌, 진행한 순서대로 기재했습니다.</p>
            <br />
            <p>퍼블리싱 프로젝트 4개, 실무 1개, 프론트엔드 프로젝트 5개</p>
            <br />
            <CarouselPortfolio />
            <br />
        </>

    return (
        <Section>
            <Visitor no={0} visitor={notice} notice="true" />
            <VisitorPortfolio no={1} content={obj.huge} />
            <VisitorPortfolio no={2} content={obj.netflix} />
            <VisitorPortfolio no={3} content={obj.naver} />
            <VisitorPortfolio no={4} content={obj.genesis} />
            <VisitorPortfolio no={5} content={obj.flag} />
            <VisitorPortfolio no={6} content={obj.vom} />
            <VisitorPortfolio no={7} content={obj.todo} />
            <VisitorPortfolio no={8} content={obj.cyland} />
            <VisitorPortfolio no={9} content={obj.movieapp} />
            <VisitorPortfolio no={10} content={obj.covid} />
        </Section>
    )
}

export default Portfolio;