import styled from "styled-components";
import ItemList from '../components/nft/ItemList';
import dummyNfts from '../assets/dymmydata/dummyNfts';
import { useEffect, useState } from 'react';
import fetchMetadata from '../components/nft/fetchMetadata';

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

  &.search {
    padding: 1rem 1rem;
  }
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

const Input = styled.input`
  width: 15rem;
  height: 2.5rem;
  padding: 0.1rem 0.5rem;
`;

const Button = styled.button`
  background: #212529;
  border: 0.1rem solid transparent;
  padding: 10px 15px;
  color: #fff;
  cursor: pointer;
  border-radius: 0.3rem;
  margin-left: 1rem;
  
  &:hover {
    border: 0.1rem solid black;
    background-color: white;
    color: black;
    transition: color 0.3;
  }
`;

const Nfts = () => {
  const [nftList, setNftList] = useState(dummyNfts);
  const [metaList, setMetaList] = useState([]);
  const [filtered, setFiltered] = useState();
  const [keyword, setKeyword] = useState();

  useEffect(() => {
    // 전체 NFT 정보 백엔드에서 가져와서 nftList에 저장
    // // ipfs 링크로 메타데이터 받아오기
    // let metas = new Array();
    // nftList.map((nft) => {
    //   // ipfs 링크로 메타데이터 받아오기
    //   fetchMetadata(nft.ipfs).then((meta) => {
    //     metas.push({...nft, nftId: nft.nftId, meta: meta });
    //   })
    // })
    // setMetaList(metas);
    // setNftList(metas);
  }, [])

  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  const handleSearch = () => {
    // if (keyword === '') {
    //   setNftList(dummyNfts);
    // } else {
    //   console.log('clicked');
    //   let newFiltered = metaList.filter((nft) => {
    //     return (nft.meta.name.includes(keyword) || nft.meta.description.includes(keyword));
    //   })
    //   console.log(newFiltered);
    // }
  }
  

  return (
    <Main>
      {console.log(nftList)}
      <Section>
        <Container>
          <Div>
            <TitleDiv>
              <Title>NFTs</Title>
            </TitleDiv>
          </Div>
          <Div className='search'>
            <span>
              <Input type='text' placeholder='원하는 키워드를 입력하세요' onChange={handleChange}/>
              <Button type='button' onClick={handleSearch}>검색</Button>
            </span>
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