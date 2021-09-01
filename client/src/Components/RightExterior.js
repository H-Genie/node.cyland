import styled from 'styled-components';
import RightInterior from './RightInterior';

const Exterior = styled.div`
    width : calc(100% - 40px);
    height : 90%;
    background-color : white;
    border-radius : 20px;
    display: flex;
    align-items: center;
    
    position: relative;
}
`;

const RightExterior = () => {
    return (
        <Exterior>
            <RightInterior />
        </Exterior>
    )
}

export default RightExterior;