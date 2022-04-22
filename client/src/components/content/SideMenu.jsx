import styled from "styled-components";
import { useHistory } from "react-router-dom";

const SideMenuContainer = styled.div`
    flex: 0.7 1 0;
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

const PostButton = styled.button`
    background-color: #f5f6fa;
    border-color: #f5f6fa;
    padding: 0.8rem;
    margin: 0.5rem;
    border-radius: 2rem;
`;

const SideMenu = () => {

    const history = useHistory();

    return (
    <SideMenuContainer>
        <PostButton onClick={() => history.push('/write')}>글쓰기</PostButton>
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
            <Trend>
                트랜드_4
            </Trend>
            <Trend>
                트랜드_5
            </Trend>
        </TrendList>
    </SideMenuContainer>
    );
}

export default SideMenu;