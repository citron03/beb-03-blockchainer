import dummyPosts from "../../assets/dymmydata/dummyPosts";
import styled, { keyframes, css } from "styled-components";
import PostComponent from "./PostComponent";
import RepresentativePost from "./RepresentativePost";
import SideMenu from "./SideMenu";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const PostsContainer = styled.div`
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

    const [representativePost, ...posts] = dummyPosts;
    const [isVisible, setIsVisible] = useState(false);
    const [target, setTarget] = useState(false);

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
            <ContentContainer ref={setTarget} isVisible={isVisible}>
                <RepresentativePost post={representativePost} />
                <PostsContainer>
                    {
                        posts.map((el) => {
                            return <PostComponent key={el.post_id} data={el}/>
                        })
                    }
                </PostsContainer>
                <SideMenu/>
            </ContentContainer>
            <Pagination/>
        </>
    )
}

export default PostsComponent;