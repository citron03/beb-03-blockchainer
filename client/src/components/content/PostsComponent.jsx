import dummyPosts from "../../assets/dymmydata/dummyPosts";
import styled, { keyframes } from "styled-components";
import PostComponent from "./PostComponent";
import RepresentativePost from "./RepresentativePost";
import Trending from "./Trending";

const PostsContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(4, 1fr);
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
    animation: ${move} 2s;
    overflow: hidden;
    box-sizing: border-box;
`

function PostsComponent() {

    const [representativePost, ...posts] = dummyPosts;
    return (
        <ContentContainer>
            <RepresentativePost post={representativePost} />
            <PostsContainer>
                {
                    posts.map((el) => {
                        return <PostComponent key={el.post_id} data={el}/>
                    })
                }
            </PostsContainer>
            <Trending/>
        </ContentContainer>
    )
}

export default PostsComponent;