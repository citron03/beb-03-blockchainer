import styled from "styled-components";
import { Link } from "react-router-dom";
import image from './../../assets/images/easter-tree-g1f28a53d6_1280.jpg';

const RepresentativePostContainer = styled.div`
    border-right: 1px solid #dfe6e9;
    width: 30rem;
    height: 50.5rem;  
    padding: 1rem 3rem 1rem 1rem;
    margin: 1rem;
    color: black;
`;

const Image = styled.img`
    width: 100%;
    height: auto;  
`

const RepresentativePost = ({post}) => {
    return (
        <Link to={`/postdetail/${post.post_id}`}>
            <RepresentativePostContainer>
                대표 포스트
                <h1>{post.title}</h1>
                <p>작성자 : {post.writer}</p>
                <Image src={image} alt="https://pixabay.com/ko/photos/%eb%b6%80%ed%99%9c%ec%a0%88-%eb%82%98%eb%ac%b4-%eb%b6%80%ed%99%9c%ec%a0%88-7106933/" />
                <h3>{post.content}</h3>
            </RepresentativePostContainer>
        </Link>
    );
}

export default RepresentativePost;