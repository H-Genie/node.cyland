import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    height: 40px;
    border: 1px solid #85c8f2;
    display: flex;
    align-items: center;
    padding: 0 20px;

    h6 {
        width : 50%;
        color : #85c8f2;
    }

    option {
        
    }

    select {
        color : rgb(108, 108, 108);
        font-family: SCDream4;
        font-size: 14px;
        letter-spacing: -0.5px;
        letter-spacing: 0;
        line-height: 18px;

        cursor : pointer;
        padding : 11px 20px;
        border : none;
        outline : none;
        background: none;
        appearance: none;
    }
`;

const Today = () => {
    return (
        <Div>
            <h6>TODAY IS...</h6>
            <select>
                <option>😊 행복</option>
                <option>🥺 외로움</option>
                <option>😷 아픔</option>
                <option>😁 기쁨</option>
                <option>💪 화이팅</option>
                <option>😄 즐거움</option>
                <option>💬 그냥</option>
                <option>😭 슬픔</option>
                <option>💣 열받음</option>
                <option>⛔ 귀찮음</option>
                <option>😍 설렘</option>
                <option>⏳ 바쁨</option>
                <option>😔 우울</option>
                <option>💚 사랑해</option>
                <option>😥 그리움</option>
                <option>😕 심심</option>
                <option>😴 피곤</option>
                <option>😫 힘듦</option>
                <option>🍚 배고픔</option>
                <option>🍺 술고픔</option>
            </select>
        </Div>
    )
}

export default Today;