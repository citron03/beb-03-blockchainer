import styled from "styled-components";
import Advertisement from "./Advertisement";
import LoginInformation from "./LoginInformation";
import PostRank from "./PostRank";

const HomeRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex: 1.5 1 0;
    margin: 1rem;
`;

const HomeRight = () => {
    return (
        <HomeRightContainer>
            <LoginInformation/>
            <PostRank/>
            <Advertisement/>
        </HomeRightContainer>
    );
}

export default HomeRight;