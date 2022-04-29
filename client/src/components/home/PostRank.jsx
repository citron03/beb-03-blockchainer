import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PostRankContainer = styled.section`
    /* border-left: 1px solid #636e72; */
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
    &:hover {
        transform: translate(-0.5px, -1px);
    }
    cursor: pointer;
`

const fetchPostRank = async () => {
    const getPost = await axios.get(`http://localhost:4000/home/rank`);
    return getPost.data.data;
}

const PostRank = () => {

    const [posts, setPosts] = useState([]);
    const history = useHistory();
    
    useEffect(() => {
        fetchPostRank()
            .then(el => setPosts(el))
            .catch(err => console.log(err));
    }, [])

    return (
    <PostRankContainer>
        <ListsTitle>인기글</ListsTitle>
        <Lists>
            {posts.length > 0 ? posts.map((el, idx) => {
                return <List key={el.id} rank={String(idx + 1)} 
                            onClick={() => history.push(`/postdetail/${el.id}`)}>{`${el.title} - (${el.count})`}</List>
            }) : null}
        </Lists>
    </PostRankContainer>);
}

export default PostRank;