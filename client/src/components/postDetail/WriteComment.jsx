import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const WriteCommentConatiner = styled.div`
    width: 50%;
    height: 3rem;
    display: flex;
    margin: 1.3rem;
    padding-left: 4.5rem;
    justify-content: center;
`

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  min-width: 200px;
  height: 5rem;
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
  margin-right: 1rem;
`;

const CommentButton = styled.button`
    background-color: #f5f6fa;
    border-color: #f5f6fa;
    font-size: 0.8rem;
    border-radius: 2rem;
    width: fit-content;
    min-width: 3rem;
`;

const WriteComment = ( {content = "", setUpdate = null, post_id, comment_id = null} ) => {

    const [newContent, setNewContent] = useState(content);

    const handleCommentPost = () => {

        let url = "http://localhost:4000/";

        if(setUpdate){
            // 업데이트
            url += "commentupdate";
            const payload = {
                post_id,
                content : newContent,
                comment_id
            }
            console.log(payload);
            // axios.put(url, payload). then(el => {
            //     console.log(el);
            // })
            setUpdate(false);
        } else {
            // 새 등록
            url += "commentposting";
            const payload = {
                post_id,
                content : newContent
            }
            console.log(payload);
            // axios.post(url, payload). then(el => {
            //     console.log(el);
            // })
            setNewContent("");
        }
    }

    return (
    <WriteCommentConatiner>
        <TextArea placeholder="Please enter your comment" 
            value={newContent} 
            onChange={(e) => setNewContent(e.target.value)}
        />
        <CommentButton onClick={handleCommentPost}>등록</CommentButton>
    </WriteCommentConatiner>)
}

export default WriteComment;