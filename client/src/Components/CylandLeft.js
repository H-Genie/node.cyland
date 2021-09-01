import styled from 'styled-components';
import LeftExterior from './LeftExterior';

const Left = styled.div`
    width : 30%;
    height : 100%;    
    background-color : #85c8f2;
    border-radius : 20px;
    display : flex;
    justify-content : flex-end;
    align-items : center;
`;

const CylandLeft = () => {
    return (
        <Left>
            <LeftExterior />
        </Left>
    )
}

export default CylandLeft;