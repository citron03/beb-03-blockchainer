import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import fetchMetadata from './../nft/fetchMetadata'

const NewestNftContainer = styled.section`
    flex: 1 1 0;
`

const Image = styled.img`
    width: 200px;
    height: 200px;
`;

const ImageDiv = styled.div`
    margin: auto;
    border: 1px solid black;
    box-shadow: 1px 0.5px gray;
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
    &:hover {
        transform: translate(-1px, -1px);
        cursor: pointer;
    }
    &:active {
        background-color: #fbf7f7;
    }
`;

const AllImageDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;
`;

const NftTitle = styled.h3`
    text-align: center;
    margin: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #636e72;
`

const NftText = styled.p`
    color: black;
    width: fit-content;
    margin: 1px auto 1px auto;
    border-bottom: ${({border}) => border ? `1px solid black` : null};
`

const fetchNewestNft = async () => {
    const getPost = await axios.get(`http://localhost:4000/home/newstnft`);
    return getPost.data.data;
}

const getMetaData = async () => {
    const ipfs = await fetchNewestNft();
    const metaData = [];

    if(ipfs){
        for(let el of ipfs) {
            let tmp = await fetchMetadata(el.ipfs);
            metaData.push({metadata: tmp, nft: el});
        }
    } 
    return metaData;
}

const NewestNft = () => {

    const [metaData, setMetaData] = useState([]);
    const history = useHistory();

    const handleClick = (nftId, nft, metadata) => {
        history.push({
          pathname: `/nftdetail/${nftId}`,
          state: {nft, metadata}
        })
      }

    useEffect(() => {
        getMetaData()
            .then(el => setMetaData(el));
    }, []);

    return (
    <NewestNftContainer>
        <NftTitle>Newest Nfts</NftTitle>
        <AllImageDiv>
            {metaData.length > 0 ? 
                metaData.map((el) => {
                    return (
                        <ImageDiv key={el.nft.id} onClick={() => handleClick(el.nft.id, el.nft, el.metadata)}>
                                <Image src={el.metadata.image} alt={el.nft.name}/>
                                <NftText border={true}>{el.nft.name}</NftText>
                                <NftText>{el.nft.price} BCT</NftText>
                        </ImageDiv>);
                }) : null}
        </AllImageDiv>
    </NewestNftContainer>);
}

export default NewestNft;