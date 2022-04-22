import styled from "styled-components";
import HomeLeft from "../components/home/HomeLeft";
import HomeRight from "../components/home/HomeRight";

const HomeContainer = styled.div`
    display: flex;
    margin: 100px 1rem 1rem 1rem;
    height: 100vh;
`;

const Home = () => {
    return (
        <HomeContainer>
            <HomeLeft/>
            <HomeRight/>
        </HomeContainer>
    );
}

export default Home;