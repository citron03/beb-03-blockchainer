import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setReload } from "../../Redux/reload";

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

const WriteComment = ( {content = "", setUpdate = null, post_id, comment_id = null, userName} ) => {

    const [newContent, setNewContent] = useState(content);
    const reload = useSelector(state => state.reload.controller);
    const buttonName = setUpdate ? "수정" : "등록";
    const dispatch = useDispatch();

    const handleCommentPost = () => {
        let url = "http://localhost:4000/comment/";
        if(setUpdate){
            // 업데이트
            if((newContent !== '' || comment_id) && userName !== ''){
                url += "update";
                const payload = {
                    content: newContent,
                    id: comment_id
                }
                console.log(payload);
                axios.patch(url, payload)
                    .then(el => {
                        console.log(el);
                        setUpdate(false); 
                        dispatch(setReload({
                            controller: !reload
                        }));                        
                    })
            } else {
                alert("내용을 입력하세요!");
            }
        } else {
            // 새 등록
            if((newContent !== "" || post_id) && userName !== ""){
                url += "posting";
                const payload = {
                    writer: userName, 
                    post_id,
                    content : newContent
                }
                
                axios.post(url, payload)
                    .then(el => {
                        console.log(el);
                        setNewContent(""); 
                        dispatch(setReload({
                            controller: !reload
                        }));
                    })
                    .catch(err => console.log(err));
            } else {
                alert("내용을 입력하세요!");
            }
        }
    }

    return (
    <WriteCommentConatiner>
        <TextArea placeholder="Please enter your comment" 
            value={newContent} 
            onChange={(e) => setNewContent(e.target.value)}
        />
        <CommentButton onClick={handleCommentPost}>{buttonName}</CommentButton>
    </WriteCommentConatiner>)
}

export default WriteComment;