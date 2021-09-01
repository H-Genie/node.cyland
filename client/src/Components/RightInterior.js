import { Switch, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../router/Home';
import Resume from '../router/Resume';
import Portfolio from '../router/Portfolio';
import Story from '../router/Story';
import Status404 from '../router/Status404';
import { selectColor, setPathname } from '../modules/selectColor';


const Interior = styled.div`
    width: calc(100% - 40px);
    height: 90%;
    border: 2px solid #85c8f2;
    border-radius: 20px;
    margin-left: 10px;
    padding: 20px 30px 0 35px;
    color : rgb(108, 108, 108);

    & > h5 {
        font-family : 'SCDream6';
        letter-spacing : -1px;
        margin-bottom : 20px;
    }
`;

const Nav = styled.nav`
    position: absolute;
    right: -68px;
    top : 102.406px;
`;

const Ribbon = styled.div`
    width: 100px;
    height: 50px;
    background-color: #7d88f9;
    color : white;
    font-family : 'SCDream3';

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid rgb(125, 102, 227);
    border-left-color: #85c8f2;
    border-left-width: 2px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom : 10px;

    a:nth-last-of-type(1) & {margin-bottom : 0}

    &.selected {
        background-color : white;
        color : #7d88f9;
    }
`;

const RightInterior = () => {
    setPathname();

    return (
        <Interior>
            <h5>ⓦelcømё て♡ GЁЙIЭĿÅПÐ ~~♬</h5>
            <Nav>
                <Link to={'/'}>
                    <Ribbon
                        id="ribbon0"
                        onClick={() => selectColor(0)}
                    >
                        Home
                    </Ribbon>
                </Link>
                <Link to={'/resume'}>
                    <Ribbon
                        id="ribbon1"
                        onClick={() => selectColor(1)}
                    >
                        Resume
                    </Ribbon>
                </Link>
                <Link to={'/portfolio'}>
                    <Ribbon
                        id="ribbon2"
                        onClick={() => selectColor(2)}
                    >
                        Portfolio
                    </Ribbon>
                </Link>
                <Link to={'/story'}>
                    <Ribbon
                        id="ribbon3"
                        onClick={() => selectColor(3)}
                    >
                        Story
                    </Ribbon>
                </Link>
            </Nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/story" component={Story} />
                <Route render={Status404} />
            </Switch>
        </Interior>
    )
}

export default RightInterior;