import styled from "styled-components";
import Item from './Item';

const ListContainer = styled.div`
  display: flex;
  width: 60%;
  border: 1px solid lightgray;
  padding: 0.2rem 0.2rem;
  flex-wrap : wrap;
`;

const ItemList = ({ dataList }) => {

  return (
    <ListContainer>
      {console.log(dataList[0])}
      {dataList[0].map((nft) => {
        return (
          <Item nft={nft} key={nft.nftId}/>
        );
      })}
    </ListContainer>
  );
}

export default ItemList;