import styled, { keyframes, css } from "styled-components";
import PostComponent from "./PostComponent";
import RepresentativePost from "./RepresentativePost";
import SideMenu from "./SideMenu";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import fetchPosts from './../contentPage/fetchData/fetchPosts';
import { useSelector, useDispatch } from "react-redux";
import { setReload } from "../../Redux/reload";
import { useHistory } from "react-router-dom";

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

const PostButton = styled.button`
    background-color: #212529;
    color: #fff;
    padding: 1.3rem;
    margin: 1rem;
    border-radius: 3rem;
    font-size: 3rem;
    &:hover {
        background-color: white;
        color: black;
    }
`

const Notify = styled.p`
    font-size: 3.3rem;
`

function PostsComponent() {

    const [posts, setPosts] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [target, setTarget] = useState(false);
    const reload = useSelector(state => state.reload.controller);
    const userName = useSelector(state => state.token.username);
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        let isComponentMounted = true;
        fetchPosts(1)
            .then(el => {
                if(isComponentMounted){
                    setPosts(el.data.data);
                    dispatch(setReload({
                        controller: !reload
                    }));
                }
            });
        return () => {
            isComponentMounted = false;
        }
    }, [reload, dispatch]);

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
                </> : userName.length > 0 ? 
                    <PostButton onClick={() => history.push('/write')}>글쓰기</PostButton>
                    : <Notify>로그인 후 BlockChainer의 첫 글을 남겨주세요!</Notify>}
        </>
    )
}

export default PostsComponent;