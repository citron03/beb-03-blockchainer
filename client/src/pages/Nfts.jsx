import styled from "styled-components";
import ItemList from '../components/nft/ItemList';
import dummyNfts from '../assets/dymmydata/dummyNfts';
import { useEffect, useState } from 'react';

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

const Nfts = () => {
  const [nftList, setNftList] = useState(dummyNfts);

  useEffect(() => {
    // 전체 NFT 정보 가져오기
  })

  return (
    <Main>
      <Section>
        <Container>
          <Div>
            <TitleDiv>
              <Title>NFTs</Title>
            </TitleDiv>
          </Div>
          <Div>
            <ItemList dataList={nftList} />
          </Div>
        </Container>
      </Section>
    </Main>
  );
}

export default Nfts;