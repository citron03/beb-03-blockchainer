import styled from "styled-components";
import image from "./../../assets/images/profile.png"
import { useState } from "react";

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

const tmpData = [
    {
        image,
        alt: "예시1"
    },
    {
        image,
        alt: "예시2"
    },
    {
        image,
        alt: "예시3"
    },
    {
        image,
        alt: "예시4"
    }
]

const NftTitle = styled.h3`
    text-align: center;
    margin: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #636e72;
`

const NewestNft = () => {

    const [data, setData] = useState(tmpData);

    return (
    <NewestNftContainer>
        <NftTitle>Newest Nfts</NftTitle>
        <AllImageDiv>
            {data.length > 0 ? 
                data.map((el, idx) => {
                    return (
                        <ImageDiv key={idx}>
                            <Image src={el.image} alt={el.alt}/>
                            <p>{el.alt}</p>
                        </ImageDiv>);
                }) : null}
        </AllImageDiv>
    </NewestNftContainer>);
}

export default NewestNft;