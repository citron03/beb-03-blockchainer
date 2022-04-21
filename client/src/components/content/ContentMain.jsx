import styled, { keyframes } from "styled-components";
import image1 from './../../assets/images/cats-eyes-g037a20d76_1280.jpg';
import image2 from './../../assets/images/easter-tree-g1f28a53d6_1280.jpg';
import image3 from './../../assets/images/tulips-ga6f43c0dc_1280.jpg';
import source from "../../assets/images/source";
import { useState, useRef, useEffect } from 'react';

const move = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const ContentMainContainer = styled.section`
    display: flex;
    margin: 100px 0.5rem 0.5rem 0.5rem;
    padding: 0.5rem;
    overflow: hidden;
    animation: ${move} 1.5s;
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
const IMAGE_NUM = 2;

const ContentMain = () => {

    const [imgIndex, setImgIndex] = useState(0);
    const imageRef = useRef();

    const handleCarouselLeft = () => {
        if(imgIndex === 0){
            setImgIndex(IMAGE_NUM);
        } else {
            setImgIndex((prev) => prev - 1);
        }
    }

    const handleCarouselRight = () => {
        if(imgIndex === IMAGE_NUM){
            setImgIndex(0);
        } else{
            setImgIndex((prev) => prev + 1);
        }
    }

    useEffect(() => {
        imageRef.current.style.transition = "all 1s ease";
        imageRef.current.style.transform = `translateX(-${imgIndex}00%)`; 
      }, [imgIndex]);

    return (
    <ContentMainContainer>
        <Button onClick={handleCarouselLeft}>{"<"}</Button>
        <ImageContainer ref={imageRef}>
            <Image src={image1} alt={source.image1}/>
            <Image src={image2} alt={source.image2}/>
            <Image src={image3} alt={source.image3}/>
        </ImageContainer>
        <Button onClick={handleCarouselRight}>{">"}</Button>
    </ContentMainContainer>
    );
}

export default ContentMain;