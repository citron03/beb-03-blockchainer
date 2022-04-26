import styled from "styled-components";
import image from './../../assets/images/tulips-ga6f43c0dc_1280.jpg';
import source from './../../assets/images/source';

const AdvertisementContainer = styled.section`
    box-sizing: border-box;
    border: 1px solid black;
    width: fit-content;
    height: fit-content;
    margin: 1rem;
    cursor: pointer;
`;

const AdTexts = styled.div`
    padding: 0.5rem;
`

const Image = styled.img`
    width: 400px;
    height: 250px;
`

const Advertisement = () => {
    return (
    <AdvertisementContainer>
        <Image src={image} alt={source.image3} />
        <AdTexts>
            <h3>광고</h3>
            <p>더미 광고입니다.</p>
        </AdTexts>
    </AdvertisementContainer>);
}

export default Advertisement;