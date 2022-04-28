import styled from "styled-components";
import Item from './Item';

const ListContainer = styled.div`
  display: flex;
  width: 60%;
  border: 1px solid lightgray;
  padding: 0.2rem 0.2rem;
  flex-wrap : wrap;
`;

const Div = styled.div`
  display: block;
  text-align: center;
  width: 100%;
  color: gray;
`;

const ItemList = ({ dataList }) => {
  return (
    <ListContainer>
      {dataList.length === 0 ? (
        <Div>
          <p>검색 결과가 없습니다</p>
        </Div>) :
        (dataList.map((nft, index) => {
          return (
            <Item nft={nft} index={index} key={nft.nftId}/>
          );
        }))}
    </ListContainer>
  );
}

export default ItemList;