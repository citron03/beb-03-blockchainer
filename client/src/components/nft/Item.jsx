import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import fetchMetadata from './fetchMetadata';

const ItemDiv = styled.div`
  border: 1px solid lightgray;
  width: 32%;
  margin: 0.5rem 0.5rem;
  margin-left: ${(props) => (props.nftId % 3 === 1 ? "0.55rem" : "0rem")};

  &:hover {
    border: 2px solid black;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 15rem;
  height: 18rem;
  margin: 1rem;
  padding: 2rem 0rem;
`;

const DescDiv = styled.div`
  border-top: 1px solid black;
`;

const DescP = styled.p`
  text-align: center;

  &.name {
    font-weight: bold;
    font-size: 1.5rem;
  }

  &.description {
    color: gray;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
`;

const Item = ({ nft }) => {
  const history = useHistory();
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    // ipfs 링크로 메타데이터 받아오기
    fetchMetadata(nft.ipfs).then((meta) => {
      setMetadata(meta);
    })
  }, [])

  const handleClick = (nftId) => {
    console.log(nft);
    history.push({
      pathname: `/nftdetail/${nftId}`,
      state: {nft, metadata}
    })
  }

  return (
    <ItemDiv nftId={nft.nftId} onClick={() => { handleClick(nft.nftId) }}>
      <Image src={metadata.image} />
      <DescDiv>
        <DescP className="name">{metadata.name}</DescP>
        <DescP className="description">{metadata.description}</DescP>
      </DescDiv>
    </ItemDiv>
  );
}

export default Item;