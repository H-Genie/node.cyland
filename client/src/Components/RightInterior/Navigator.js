import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectColor } from '../../modules/selectColor';

const Navigator = () => {
    return (
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
    )
}

export default Navigator;

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