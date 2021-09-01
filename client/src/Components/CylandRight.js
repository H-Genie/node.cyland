import styled from 'styled-components';
import RightExterior from './RightExterior';

const Right = styled.div`
    width : 70%;
    height : 100%;
    background-color : #85c8f2;
    border-radius : 20px;
    display : flex;
    align-items : center;
`;

const CylandRight = () => {
    return (
        <Right>
            <RightExterior />
        </Right>
    )
}

export default CylandRight;