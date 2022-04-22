import styled from "styled-components";

const HomeRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #d9d9ef;
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
            <DummyDiv>Right Side</DummyDiv>
            <DummyDiv>Login Information</DummyDiv>
            <DummyDiv>???</DummyDiv>
        </HomeRightContainer>
    );
}

export default HomeRight;