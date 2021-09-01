import styled from 'styled-components';
import GlobalStyle from './styled/GlobalStyle';

import CylandLeft from './Components/CylandLeft';
import CylandRight from './Components/CylandRight';

const Main = styled.main`
    width : 1280px;
    height : 720px;
    display : flex;
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Main>
                <CylandLeft />
                <CylandRight />
            </Main>
        </>
    )
}

export default App;