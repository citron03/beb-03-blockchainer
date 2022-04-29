import styled from "styled-components";
import Comments from "./Comments";
import WriteComment from "./WriteComment";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setReload } from "../../Redux/reload";
import { useCallback } from "react";
import parseDate from "../parsingData/parseDate";

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
    const history = useHistory();
    const userName = useSelector(state => state.token.username);
    const reload = useSelector(state => state.reload.controller);
    const dispatch = useDispatch();

    const handleDeletePost = useCallback((post_id, history) => {
        const url = "http://localhost:4000/content/delete";
        const payload = {
            id: post_id
        }    
        axios.post(url, payload)
            .then(el => {
                // console.log(el);
                dispatch(setReload({
                    controller: !reload
                }));    
                history.push("/content");
            })
            .catch(err => console.log(err));
    }, [reload, dispatch]);

    return (
    <>
        <PostContainer>
            <UpdatedDate>마지막 수정 : {parseDate(data.updatedAt)}</UpdatedDate>
            <Title>제목 : {data.title}</Title>
            <PostHeader>
                <p>작성자 : {data.writer}</p>
                {userName === data.writer ? 
                    <ButtonDiv>
                        <Button onClick={() => history.push(`/modify/${data.id}`)}>수정</Button>
                        <Button onClick={() => handleDeletePost(data.id, history)}>삭제</Button>
                    </ButtonDiv>                
                    : null}
            </PostHeader>
            <Paragraph>{data.content}</Paragraph>
        </PostContainer>
        <AllCommentsSection>
            <Comments post_id={data.id} data={data.Comments}/> 
            {userName.length > 0 ?
                <WriteComment post_id={data.id} userName={userName}/> : null}
        </AllCommentsSection>
    </>
    );
}

export default Post;