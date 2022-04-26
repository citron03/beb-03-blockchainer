import styled, { keyframes } from "styled-components";

const SearchContainer = styled.section`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Input = styled.input`
    width: 80%;
    height: 4rem;
    font-size: 1.7rem;
    padding: 1rem;
    border-radius: 10rem;
    padding: 0 2rem 0 5.5rem;
`

const Button = styled.button`
    position: absolute;
    background-color: black;
    color: white;
    border-radius: 3rem;
    left: 7.5rem;
    top: 0.3rem;
    width: 55px;
    height: 55px;
    &:active{
        background-color: white;
        color: black;
    }
`

const SearchDiv = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`

const SiteInformation = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InformationTitle = styled.h2`
    border-bottom: 1px solid black;
    width: fit-content;
    padding: 0.5rem;
`

const fadein = keyframes`
    from {
        opacity: 0.1;
    }
    to {
        opacity: 1;
    }
`

const InformationText = styled.h3`
    animation: ${fadein} 3s;
`

const Search = () => {
    return (
    <SearchContainer>
        <SearchDiv>
            <Input type="search" placeholder="관심 있는 내용을 검색하세요" />
            <Button>검색</Button>
        </SearchDiv>
        <SiteInformation>
            <InformationTitle>글과 댓글을 작성하고 리워드를 받으세요!</InformationTitle>
            <InformationText>BLOCKCHAINER에서는 누구나 자유롭게 활동할 수 있습니다</InformationText>
            <InformationText>커뮤니티를 활성화하고 보상을 받으세요</InformationText>
        </SiteInformation>
    </SearchContainer>);
}

export default Search;