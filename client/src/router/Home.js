import styled from 'styled-components';
import Ilchon from '../Components/CylandRight/Ilchon';

const Img = styled.img`
    width : 100%;
    height : 346px;
    margin-bottom : 10px;
`;

const Home = () => {
    document.title = "H-Genie.com";

    return (
        <>
            <Img src="./images/miniroom.jpg" alt="miniroom" />
            <Ilchon />
        </>
    )
}

export default Home;