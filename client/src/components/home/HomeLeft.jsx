import styled from "styled-components";

const HomeLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f3dbdb;
    width: 100%;
    height: 100%;
    flex: 3 1 0;
    margin: 1rem;
`;

const DummyDiv = styled.div`
    height: 30%;
    margin: 1rem;
    background-color: white;
`

const HomeLeft = () => {
    return (
        <HomeLeftContainer>
            <DummyDiv>Left Side</DummyDiv>
            <DummyDiv>최신 게시글</DummyDiv>
            <DummyDiv>???</DummyDiv>
        </HomeLeftContainer>
    );
}

export default HomeLeft;