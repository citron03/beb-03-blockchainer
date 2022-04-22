import styled from "styled-components";
import getPageCount from "../content/useData/getPageCount";
import axios from "axios";
import { useEffect, useState } from 'react';

const fetchPost = async (id) => {
    const getLastPosId = await getPageCount();
    const getPost = await axios.get(`http://localhost:4000/page/content/${getLastPosId}`);
    return getPost.data.data;
}

const NewsPostContainer = styled.div`
    flex: 1 1 0;
    margin: 1rem;
    background-color: white;
    overflow: hidden;
`
const Paragraph = styled.p`
    max-width: 70vw;
    white-space: pre-line;
    word-wrap: break-word;
    padding-left: 1rem;
    padding-right: 1rem;
`

const NewsPost = () => {

    const [newestPost, setNewestPost] = useState({});

    useEffect(() => {
        fetchPost()
            .then(el => setNewestPost(el))
            .catch(err => console.log(err));
    }, [])

    return (
    <NewsPostContainer>
        <p style={{padding: "1rem"}}>Newest Post</p>
        {newestPost.id ? 
            <>
                <span style={{padding: "1rem"}}>{newestPost.title}</span>
                <span style={{padding: "1rem"}}>작성자 : {newestPost.writer}</span>
                <Paragraph>{newestPost.content}</Paragraph>
            </>
        : null}
    </NewsPostContainer>);
}

export default NewsPost;