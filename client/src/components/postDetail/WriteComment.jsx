import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const WriteCommentConatiner = styled.div`
    
`

const Input = styled.input`
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  padding: 10px 14px;
  border-radius: 0;
  box-shadow: none;
  font-size: 15px;
`;

const CommentButton = styled.button`
    background-color: #f5f6fa;
    border-color: #f5f6fa;
    font-size: 0.8rem;
    padding: 0.5rem;
    margin: 0.3rem;
    border-radius: 2rem;
`;

const WriteComment = (content = "", setUpdate = null, post_id, comment_id = null) => {

    const [newContent, setNewContent] = useState(content);

    const handleCommentPost = () => {

        let url = "http://localhost:4000/";

        if(setUpdate){
            // 업데이트
            const payload = {
                post_id,
                content : newContent,
                comment_id
            }
            console.log(payload);
            // axios.post(url, payload). then(el => {
            //     console.log(el);
            // })
            setUpdate(false);
        } else {
            // 새 등록
            const payload = {
                post_id,
                content : newContent
            }
            console.log(payload);
            // axios.post(url, payload). then(el => {
            //     console.log(el);
            // })
        }
    }

    return (
    <WriteCommentConatiner>
        <CommentButton onClick={handleCommentPost}>등록</CommentButton>
        <Input placeholder="Please enter your comment" 
            value={newContent} 
            onChange={(e) => setNewContent(e.target.value)}
        />
    </WriteCommentConatiner>)
}

export default WriteComment;