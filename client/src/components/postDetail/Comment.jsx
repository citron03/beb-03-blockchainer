import styled from "styled-components";
import { useState } from "react";
import WriteComment from "./WriteComment";

const CommentContainer = styled.div`
    padding: 1rem;
    border-bottom: 1px solid #dfe6e9;
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

const Comment = ({data, post_id}) => {

    const [content, setContent] = useState(data.content);
    const [update, setUpdate] = useState(false);

    return (
    <>
    {update ? 
        <WriteComment content={content} comment_id={data.comment_id} setUpdate={setUpdate} post_id={post_id}/>
        : 
        <CommentContainer>
            <CommentSpan>작성자 : {data.writer}</CommentSpan>
            <CommentSpan>댓글 수정 날짜 : {data.updated_at}</CommentSpan>
            <CommentButton onClick={() => setUpdate(true)}>수정</CommentButton>
            <CommentButton>삭제</CommentButton>
            <p>{data.content}</p>
        </CommentContainer>
    }
    </>
    );
}

export default Comment;