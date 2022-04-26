import styled from "styled-components";
import NewestPost from "./NewestPost";
import NewestNft from "./NewestNft";
import Search from "./Search";

const HomeLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex: 3 1 0;
    margin: 1rem;
`;

const DummyDiv = styled.div`
    flex: 1 1 0;
    margin: 1rem;
    background-color: white;
`

const HomeLeft = () => {
    return (
        <HomeLeftContainer>
            <Search/>
            <NewestPost/>
            <NewestNft/>
        </HomeLeftContainer>
    );
}

export default HomeLeft;