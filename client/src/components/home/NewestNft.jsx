import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            let tmp = await axios.get(el.ipfs);
            metaData.push(Object.assign({nftData: tmp.data}, el));
        }
    } 
    return metaData;
}

const getImage = (str) => {
    // https://ipfs.infura.io/ipfs/
    return `https://ipfs.infura.io/ipfs/${str.slice(7)}`;
}

const NewestNft = () => {

    const [metaData, setMetaData] = useState([]);

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
                        <ImageDiv key={el.id}>
                            <Link to={`/nftdetail/${el.id}`}>
                                <Image src={getImage(el.nftData.image)} alt={el.name}/>
                                <NftText border={true}>{el.name}</NftText>
                                <NftText>{el.price} eth</NftText>
                            </Link>
                        </ImageDiv>);
                }) : null}
        </AllImageDiv>
    </NewestNftContainer>);
}

export default NewestNft;