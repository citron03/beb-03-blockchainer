import styled from "styled-components";
import image1 from './../../assets/images/cats-eyes-g037a20d76_1280.jpg';
import image2 from './../../assets/images/easter-tree-g1f28a53d6_1280.jpg';
import { useState, useRef, useEffect } from 'react';

const ContentMainContainer = styled.section`
    display: flex;
    border-top: 1px solid #dfe6e9;
    margin: 0.5rem;
    padding: 0.5rem;
    overflow: hidden;
`;

const Button = styled.button`
    border: none;
    font-size: 3rem;
    background-color: white;
    margin: 1rem;
    cursor: pointer;
    z-index: 1;
    background-color: #ffffff;
    background-color: rgba( 255, 255, 255, 0 );
`

const Image = styled.img`
    width: 100%;
    height: auto;
    margin-right: 10vw;
    margin-left: 10vw;
`;

const ImageContainer = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    height: auto;
`

const ContentMain = () => {

    const [imgIndex, setImgIndex] = useState(0);
    const imageRef = useRef();

    const handleCarousel = () => {
        if(imgIndex === 1){
            setImgIndex(0);
        } else{
            setImgIndex(1);
        }
    }

    useEffect(() => {
        imageRef.current.style.transition = "all 0.5s ease-in-out";
        imageRef.current.style.transform = `translateX(-${imgIndex}00%)`; 
      }, [imgIndex]);

    return (
    <ContentMainContainer>
        <Button onClick={handleCarousel}>{"<"}</Button>
        <ImageContainer ref={imageRef}>
            <Image src={image1} alt="https://pixabay.com/ko/photos/%ea%b3%a0%ec%96%91%ec%9d%b4%ec%9d%98-%eb%88%88-%ea%b3%a0%ec%96%91%ec%9d%b4-%ea%b2%80%ec%9d%80-%ec%83%89-2944820/"/>
            <Image src={image2} alt="https://pixabay.com/ko/photos/%eb%b6%80%ed%99%9c%ec%a0%88-%eb%82%98%eb%ac%b4-%eb%b6%80%ed%99%9c%ec%a0%88-7106933/"/>
        </ImageContainer>
        <Button onClick={handleCarousel}>{">"}</Button>
    </ContentMainContainer>
    );
}

export default ContentMain;