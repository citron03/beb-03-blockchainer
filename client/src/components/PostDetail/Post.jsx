import styled, { keyframes } from "styled-components";
import image from './../../assets/images/easter-tree-g1f28a53d6_1280.jpg';

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    h1, p {
        text-align: center;
    }
    img {
        margin: 0 auto 0 auto;
    }
`;

const Title = styled.h1`
    border-bottom: 1px solid black;
    padding: 0 1rem 1rem 1rem;
    margin: 0;
`;

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const Image = styled.img`
    animation: ${fadein} 3s;
    width: 70vw;
    height: auto;
`;

const UpdatedDate = styled.span`
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-left: 1rem;
`

const Post = ({data}) => {
    return (
    <PostContainer>
        <UpdatedDate>최종 업데이트 날짜 : {data.updated_at}</UpdatedDate>
        <Title>제목 : {data.title}</Title>
        <p>작성자 : {data.writer}</p>
        <Image src={image} alt="https://pixabay.com/ko/photos/%eb%b6%80%ed%99%9c%ec%a0%88-%eb%82%98%eb%ac%b4-%eb%b6%80%ed%99%9c%ec%a0%88-7106933/" />
        <p>내용 : {data.content}</p>
    </PostContainer>
    );
}

export default Post;