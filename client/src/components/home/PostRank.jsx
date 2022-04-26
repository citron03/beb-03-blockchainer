import styled from "styled-components";
import dummyPosts from "../../assets/dymmydata/dummyPosts";
import { useState } from "react";

const PostRankContainer = styled.section`
    border-left: 1px solid #636e72;
    margin: 1rem;
    padding: 0.5rem;
    max-width: 400px;
`;

const ListsTitle = styled.h3`
    text-align: left;
    margin-left: 3rem;
`

const Lists = styled.ol`
    
`

const List = styled.li`
    padding: 0.3rem;
    list-style: none;
    &::before {
        content: '${props => props.rank}';
        font-weight: bold;
        margin-right: 1rem;
    }
`

const PostRank = () => {

    const [posts, setPosts] = useState(dummyPosts.slice(0, 5));
    
    return (
    <PostRankContainer>
        <ListsTitle>인기글</ListsTitle>
        <Lists>
            {posts.map((el, idx) => {
                return <List key={el.post_id} rank={String(idx + 1)}>{el.title}</List>
            })}
        </Lists>
    </PostRankContainer>);
}

export default PostRank;