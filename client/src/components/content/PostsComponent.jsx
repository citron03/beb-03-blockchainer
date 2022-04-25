import styled, { keyframes, css } from "styled-components";
import PostComponent from "./PostComponent";
import RepresentativePost from "./RepresentativePost";
import SideMenu from "./SideMenu";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import fetchPosts from './../contentPage/fetchData/fetchPosts';

const PostsContainer = styled.div`
    flex: 3 1 0;
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(3, minmax(200px, 300px));
    max-height: 55rem;
    margin: 2rem;
`
const move = keyframes`
    from {
        opacity: 0;
        margin-top: 3rem;
    }
    to {
        opacity: 1;
        margin-top: 0;
    }
`

const ContentContainer = styled.section`
    display: flex;
    border-top: 1px solid #dfe6e9;
    padding-top: 0.75rem;
    animation: ${({isVisible}) => isVisible ? css`${move} 2s` : null};
    visibility: ${({isVisible}) => isVisible ? "visible" : "hidden"};
    overflow: hidden;
    box-sizing: border-box;
`

function PostsComponent() {

    const [posts, setPosts] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [target, setTarget] = useState(false);

    useEffect(() => {
        fetchPosts(1)
            .then(el => setPosts(el.data.data));
    }, []);

    useEffect(() => {
        if(target){
            const io = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    } 
                }, {threshold: 0.4}
            );
            io.observe(target);
        }
    }, [target, isVisible])

    // useEffect(() => {
    //     console.log(isVisible);
    // }, [isVisible])

    return (
        <>
            {posts.length > 0 ?
                <>
                    <ContentContainer ref={setTarget} isVisible={isVisible}>
                        <RepresentativePost post={posts[0]} />
                        <PostsContainer>
                            {
                                posts.map((el) => {
                                    return <PostComponent key={el.id} data={el}/>
                                })
                            }
                        </PostsContainer>
                        <SideMenu/>
                    </ContentContainer>
                    <Pagination/>
                </> : null}
        </>
    )
}

export default PostsComponent;