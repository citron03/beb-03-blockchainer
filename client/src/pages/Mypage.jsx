import styled from "styled-components";
import { useSelector } from 'react-redux';

const Main = styled.main`
margin-top: 90px;
display: block;
`;

const Section = styled.section`
scroll-margin-top: 70px;
padding: 40px 0;
overflow: hidden;
`;

const Container = styled.div`
width: 100%;
margin-right: auto;
margin-left: auto;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TitleDiv = styled.div`
  text-align: center!important;
  flex: 0 0 auto;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 50px;
  color: var(--color-black);
`;

const Mypage = () => {
  const tokenSelector = useSelector((state) => state.token);
  return (
    <Main>
      <Section>
        <Container>
          <Div>
            <TitleDiv>
              <Title>Mypage</Title>
            </TitleDiv>
            {console.log(tokenSelector)}
          </Div>
        </Container>
      </Section>
    </Main>
  );
}

export default Mypage;