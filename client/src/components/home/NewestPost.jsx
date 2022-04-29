import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsPostContainer = styled.section`
    flex: 3 1 0;
    margin: 1rem;
    background-color: white;
    /* border: 1px solid black; */
    border-radius: 8px;
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

const NewestPostDiv = styled.div`
    max-height: 70vh;
    display: block;
    overflow: auto;
    &::-webkit-scrollbar {
        background-color: #f6f2f2;
        width: 0.4rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: black;
        border-radius: 3rem;
    }
`

const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ContainerTitle = styled.h3`
    padding: 1rem;
`

const Shortcuts = styled.span`
    margin: 1.5rem;
    cursor: pointer;
    & a {
        color: black;
    }
    &:hover {
        & a {
            color: gray;
        }
    }
`

const fetchNewestPost = async () => {
    const getPost = await axios.get(`http://localhost:4000/home/newstpost`);
    return getPost.data.data;
}

const NewsPost = () => {

    const [newestPost, setNewestPost] = useState({});

    useEffect(() => {
        fetchNewestPost()
            .then(el => {
                if(el){
                    setNewestPost(el)
                }
            })
            .catch(err => console.log(err));
    }, [])

    return (
    <NewsPostContainer>
        {newestPost.title ? 
            <>
                <ContainerHeader>
                    <ContainerTitle>Newest Post</ContainerTitle>
                    <Shortcuts>
                        <Link to={`/postdetail/${newestPost.id}`}>
                            바로 가기            
                        </Link>
                    </Shortcuts>
                </ContainerHeader>
                <NewestPostDiv>
                    <PostHeaderDiv>
                        <span style={{padding: "1rem", fontSize: "1.2rem"}}>{newestPost.title}</span>
                        <span style={{padding: "1rem"}}>작성자 : {newestPost.writer}</span>
                    </PostHeaderDiv>
                    <Paragraph>{newestPost.content}</Paragraph>
                </NewestPostDiv>
            </>
        : null}
    </NewsPostContainer>);
}

export default NewsPost;