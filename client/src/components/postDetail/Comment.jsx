import styled from "styled-components";
import { useState } from "react";
import WriteComment from "./WriteComment";
import axios from 'axios';
import { useSelector } from "react-redux";

const CommentContainer = styled.div`
    padding: 1rem;
    border-bottom: 1px solid #95afc0;
`;

const CommentSpan = styled.span`
    margin: 2rem;
    font-size: 0.8rem;
`;

const CommentButton = styled.button`
    background-color: #f5f6fa;
    border-color: #f5f6fa;
    font-size: 0.8rem;
    padding: 0.5rem;
    margin: 0.3rem;
    border-radius: 2rem;
`;

const Paragraph = styled.p`
    white-space: pre-line;
`

const Comment = ({data, post_id}) => {

    const [update, setUpdate] = useState(false);
    const userName = useSelector(state => state.token.username);
    const handleDeleteComment = () => {
        if(!data.comment_id){
            console.log("ERROR");
            return;
        }
        const url = "http://localhost:4000/comment/delete";
        const payload = {
            id: data.comment_id
        }
        console.log(payload);
        axios.delete(url, payload)
            .then(el => {
                console.log(el);
                window.location = document.referrer;
            })
            .catch(err => console.log(err));
    }

    return (
    <>
    {update ? 
        <WriteComment content={data.content} comment_id={data.comment_id} setUpdate={setUpdate} post_id={post_id}/>
        : 
        <CommentContainer>
            <CommentSpan>작성자 : {data.writer}</CommentSpan>
            <CommentSpan>마지막 댓글 수정 날짜 : {data.updated_at}</CommentSpan>
            {userName === data.writer ?
                <> 
                    <CommentButton onClick={() => setUpdate(true)}>수정</CommentButton>
                    <CommentButton onClick={handleDeleteComment}>삭제</CommentButton>
                </>
                : null}
            <Paragraph>{data.content}</Paragraph>
        </CommentContainer>
    }
    </>
    );
}

export default Comment;