import styled from "styled-components";
import getPageCount from "../content/useData/getPageCount";
import axios from "axios";

const fetchPost = async (id) => {
    const getLastPosId = getPageCount();
    console.log(getLastPosId);
    const getPost = await axios.get(`http://localhost:4000/page/content/${id}`);
    return getPost;
}

const NewsPostContainer = styled.div`
    flex: 1 1 0;
    margin: 1rem;
    background-color: white;
`

const NewsPost = () => {
    fetchPost();
    return (
    <NewsPostContainer>
        Hello
    </NewsPostContainer>);
}

export default NewsPost;