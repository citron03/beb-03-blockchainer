import styled from "styled-components";
import Comment from "./Comment";
import { useState, useEffect } from "react";

const CommentsContainer = styled.div`
    padding: 0.3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Comments = ({post_id, data}) => {

    const [commentsArr, setCommentsArr] = useState([]);

    useEffect(() => {
        if(Array.isArray(data)){
            setCommentsArr(data);
        }
    }, [data]);

    return (
    <CommentsContainer>
        <h3>Comments</h3>
        {commentsArr.map((el, idx) => {
            return <Comment key={idx} data={el} post_id={post_id}/>
        })}
    </CommentsContainer>);
}

export default Comments;