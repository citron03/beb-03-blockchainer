import styled from "styled-components";
import Comments from "./Comments";
import WriteComment from "./WriteComment";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'

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
    white-space: pre-line;
    word-wrap: break-word;
`

const Post = ({data}) => {
    const history = useHistory({ forceRefresh: true });
    // 데이터의 댓글을 Comments 컴포넌트로 내려 보내준다.
    const userName = useSelector(state => state.token.username);
    // console.log(data, userName);

    const handleDeletePost = (post_id, history) => {
        const url = "http://localhost:4000/content/delete";
        const payload = {
            id: post_id
        }    
        axios.post(url, payload)
            .then(el => {
                console.log(el);
                history.goBack();
            })
            .catch(err => console.log(err));
    }
    return (
    <>
        <PostContainer>
            <UpdatedDate>마지막 수정 : {data.updatedAt}</UpdatedDate>
            <Title>제목 : {data.title}</Title>
            <PostHeader>
                <p>작성자 : {data.writer}</p>
                {userName === data.writer ? 
                    <ButtonDiv>
                        <Button onClick={() => handleDeletePost(data.id, history)}>삭제</Button>
                        <Button onClick={() => history.push(`/modify/${data.id}`)}>수정</Button>
                    </ButtonDiv>                
                    : null}
            </PostHeader>
            <Paragraph>{data.content}</Paragraph>
        </PostContainer>
        <AllCommentsSection>
            <Comments post_id={data.id}/> 
            <WriteComment post_id={data.id}/>
        </AllCommentsSection>
    </>
    );
}

export default Post;