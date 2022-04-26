import styled from "styled-components";

const ItemDiv = styled.div`
  border: 1px solid lightgray;
  width: 32%;
  margin: 0.5rem 0.5rem;
  margin-left: ${(props) => (props.nftId % 3 === 1 ? "0.55rem" : "0rem")};
`;

const Item = ({ nft }) => {
  return (
    <ItemDiv nftId={nft.nftId}>
      <p>{nft.nftId}</p>
    </ItemDiv>
  );
}

export default Item;