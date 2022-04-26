import styled from "styled-components";
import Advertisement from "./Advertisement";
import LoginInformation from "./LoginInformation";

const HomeRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex: 1.5 1 0;
    margin: 1rem;
`;

const DummyDiv = styled.div`
    flex: 1 1 0;
    margin: 1rem;
    background-color: white;
`

const HomeRight = () => {
    return (
        <HomeRightContainer>
            <LoginInformation/>
            <DummyDiv>실시간 인기글</DummyDiv>
            <Advertisement/>
        </HomeRightContainer>
    );
}

export default HomeRight;