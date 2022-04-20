import styled from "styled-components";

const TrendingContainer = styled.div`
    border-left: 1px solid #dfe6e9;
    margin: 1rem;
    padding: 1rem 1rem 1rem 2rem;
    text-align: center;
`

const TrendList = styled.ul`
    padding: 1rem;
    list-style: none;
`

const Trend = styled.li`
    border-bottom: 1px solid #dfe6e9;
    padding: 0.5rem;
    margin: 0.5rem;
`

const Trending = () => {
    return (
    <TrendingContainer>
        <h1>Trending</h1>
        <TrendList>
            <Trend>
                트랜드_1
            </Trend>
            <Trend>
                트랜드_2
            </Trend>
            <Trend>
                트랜드_3
            </Trend>
        </TrendList>
    </TrendingContainer>
    );
}

export default Trending;