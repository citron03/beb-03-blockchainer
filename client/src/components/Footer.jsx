import styled from "styled-components";

const FooterContainer = styled.section`
    border-top: 1px solid #c2b3b3;
    text-align: center;
    padding: 1rem;
    margin: 3rem 1rem 1rem 1rem;
    display: flex;
    justify-content: space-around;
`

const Footer = () => {
    return (
    <FooterContainer>
        <span>이용약관 | 서비스 소개 | 개인정보 처리방침 | 고객센터</span>
        <span>@BLOCKCHAINER</span>
    </FooterContainer>
    );
}

export default Footer;