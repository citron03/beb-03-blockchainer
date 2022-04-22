import styled, { keyframes } from "styled-components";
import image from './../../assets/images/easter-tree-g1f28a53d6_1280.jpg';
import Comments from "./Comments";
import WriteComment from "./WriteComment";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    h1, p {
        text-align: center;
    }
    img {
        margin: 0 auto 0 auto;
    }
    margin-top: 100px;
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

const ButtonDiv = styled.div`
    
`

const Button = styled.button`
  background: #212529;
  border: 0;
  border-radius: 5px;
  padding: 5px 20px;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
  margin: 1rem;
  &:hover {
    background: #4f5c68;
  }
`;

const PostHeader = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #f8f6f6;
`

const handleDeletePost = (post_id, history) => {
    const url = "http://localhost:4000/delete";
    const payload = {
        // writer,
        id: post_id
    }
    console.log(payload);
    // axios.delete(url, payload). then(el => {
    //     console.log(el);
    // })
    history.goBack();
}

const AllCommentsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-top: 0.1rem solid #95afc0;
    margin-top: 2rem;
    margin-bottom: 3rem;
`;

const Paragraph = styled.p`
    margin: 1rem 20% 0 20%;
`

const Post = ({data}) => {
    const history = useHistory();
    return (
    <>
        <PostContainer>
            <UpdatedDate>최종 업데이트 날짜 : {data.updated_at}</UpdatedDate>
            <Title>제목 : {data.title}</Title>
            <PostHeader>
                <p>작성자 : {data.writer}</p>
                <ButtonDiv>
                    <Button onClick={() => handleDeletePost(data.post_id, history)}>삭제</Button>
                    <Button onClick={() => history.push(`/modify/${data.post_id}`)}>수정</Button>
                </ButtonDiv>
            </PostHeader>
            {/* <Image src={image} alt="https://pixabay.com/ko/photos/%eb%b6%80%ed%99%9c%ec%a0%88-%eb%82%98%eb%ac%b4-%eb%b6%80%ed%99%9c%ec%a0%88-7106933/" /> */}
            <Paragraph>내용 : {data.content}</Paragraph>
        </PostContainer>
        <AllCommentsSection>
            <Comments post_id={data.post_id}/>
            <WriteComment post_id={data.post_id}/>
        </AllCommentsSection>
    </>
    );
}

export default Post;