import styled from "styled-components";
import ItemList from '../components/nft/ItemList';
import { useEffect, useRef, useState } from 'react';
import fetchAllNfts from '../components/nft/fetchAllNfts';

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
  const keywordRef = useRef(null);
  const [nftList, setNftList] = useState([]);
  const [filtered, setFiltered] = useState(false); // 필터링된 결과를 보여줄지 전체를 보여줄지 여부 저장
  const [searchList, setSearchList] = useState([]); // 검색어로 필터링한 리스트

  useEffect(() => {
    // 전체 NFT 정보 백엔드에서 가져와서 nftList에 저장
    fetchAllNfts().then((data) => {
      setNftList(data);
    })
  }, [])

  // 검색 버튼 클릭 시
  const handleSearch = () => {
    // console.log(keywordRef.current.value);

    const keyword = keywordRef.current.value;
    if (keyword === '') {
      setFiltered(false);
    } else {
      let newList = nftList.filter((nft) => {
        return (nft.name.includes(keyword) || nft.description.includes(keyword));
      })
      setSearchList(newList);
      setFiltered(true);
    }
  }

  const handleEntire = () => {
    setSearchList([]);
    setFiltered(false);
  }
  

  return (
    <Main>
      {/* {console.log('filterd', filtered)}
      {console.log('searchList', searchList)} */}
      <Section>
        <Container>
          <Div>
            <TitleDiv>
              <Title>NFTs</Title>
            </TitleDiv>
          </Div>
          <Div className='search'>
            <span>
              <Input type='text' placeholder='원하는 키워드를 입력하세요' ref={keywordRef}/>
              <Button type='button' onClick={handleSearch}>검색</Button>
              <Button type='button' onClick={handleEntire}>전체보기</Button>
            </span>
          </Div>
          <Div>
            {filtered === true ?
              (<ItemList dataList={searchList} />):
              (<ItemList dataList={nftList} />)}
          </Div>
        </Container>
      </Section>
    </Main>
  );
}

export default Nfts;