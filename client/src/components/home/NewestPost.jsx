import styled from "styled-components";
import getPageCount from "../content/useData/getPageCount";
import axios from "axios";
import { useEffect, useState } from 'react';
import dummyPosts from './../../assets/dymmydata/dummyPosts'

const fetchPost = async (id) => {
    const getLastPosId = await getPageCount();
    const getPost = await axios.get(`http://localhost:4000/page/content/${getLastPosId}`);
    return getPost.data.data;
}

const NewsPostContainer = styled.section`
    flex: 3 1 0;
    margin: 1rem;
    background-color: white;
    /* overflow: hidden; */
    border: 1px solid black;
    border-radius: 8px;
    /* min-height: 300px; */
`

const Paragraph = styled.p`
    max-width: 70vw;
    white-space: pre-line;
    word-wrap: break-word;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
`
const PostHeaderDiv = styled.div`
    border-bottom: 1px solid gray;
    width: fit-content;
    padding: 0.8rem;
`

const NewsPost = () => {

    const [newestPost, setNewestPost] = useState({});

    useEffect(() => {
        // fetchPost()
        //     .then(el => setNewestPost(el))
        //     .catch(err => console.log(err));
        setNewestPost(dummyPosts[0]);
    }, [])

    return (
    <NewsPostContainer>
        <h3 style={{padding: "1rem"}}>Newest Post</h3>
        {newestPost.title ? 
            <>
                <PostHeaderDiv>
                    <span style={{padding: "1rem", fontSize: "1.2rem"}}>{newestPost.title}</span>
                    <span style={{padding: "1rem"}}>작성자 : {newestPost.writer}</span>
                </PostHeaderDiv>
                <Paragraph>{newestPost.content}</Paragraph>
            </>
        : null}
    </NewsPostContainer>);
}

export default NewsPost;