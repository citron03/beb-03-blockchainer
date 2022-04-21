import styled from "styled-components";
import { useState } from 'react';
import axios from 'axios';

const ModifyContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

const Title = styled.h1`
  font-size: 50px;
  color: var(--color-black);
  text-align: center;
`;

const FormDiv = styled.div`
  box-shadow: 0 0 30px rgba(var(--color-black-rgb), 0.1);
  padding: 30px;
  background: white;
  width: 40%;
  margin-bottom: 3rem;
`;

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

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height: 60vh;
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
`

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2.5rem;
`;

const Button = styled.button`
  background: #212529;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
  margin: 1rem;
`;

const ModifyForm = ({data}) => {

    const [title, setTitle] = useState(data.title || "");
    const [content, setContent] = useState(data.content || "");

    // useEffect(() => {
    //     console.log(JSON.stringify(content));
    // }, [content]);

    const handleReset = () => {
        setContent("");
        setTitle("");
    }

    const handleUpdate = () => {
        const url = "http://localhost:4000/update";
        const payload = {
            id: data.id,
            title, content
        }
        console.log(payload);
        // axios.post(url, payload). then(el => {
        //     console.log(el);
        // })
    }

    return (
    <ModifyContainer>
        <FormDiv>
            <Title>글 수정하기</Title>
            <h3>Title</h3>
            <Input placeholder="Please enter a title" value={title} onChange={e => setTitle(e.target.value)}/>
            <h3>Contents</h3>
            <TextArea 
                placeholder="Enter the content of your post" 
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <ButtonDiv>
                <Button type="button" onClick={handleReset}>초기화</Button>
                <Button type="button" onClick={handleUpdate}>등록</Button>
            </ButtonDiv>
        </FormDiv>
    </ModifyContainer>);
}

export default ModifyForm;