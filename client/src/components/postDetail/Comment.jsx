import styled from "styled-components";
import { useState, useCallback } from "react";
import WriteComment from "./WriteComment";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { setReload } from "../../Redux/reload";

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
    const reload = useSelector(state => state.reload.controller);
    const dispatch = useDispatch();

    // useCallback 적용
    const handleDeleteComment = useCallback(() => {
        if(data.id){
            const url = "http://localhost:4000/comment/delete";
            const payload = {
                id: data.id
            }
            axios.post(url, payload)
                .then(el => {
                    // console.log(el);
                    // 삭제 후 동기화
                    setTimeout(() => {
                        dispatch(setReload({
                            controller: !reload
                        }));
                    }, 300);
                })
                .catch(err => console.log(err));
        } else {
            alert("ERROR");
        }
    }, [data, dispatch, reload]);

    return (
    <>
    {update ? 
        <WriteComment content={data.content} comment_id={data.id} setUpdate={setUpdate} post_id={post_id}/>
        : 
        <CommentContainer>
            <CommentSpan>작성자 : {data.writer}</CommentSpan>
            <CommentSpan>마지막 댓글 수정 날짜 : {data.updatedAt}</CommentSpan>
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