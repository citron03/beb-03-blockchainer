import axios from "axios";

const fetchPosts = async (page) => {
    const url = `http://localhost:4000/page/list/${page}`;
    const getPosts = await axios.get(url);
    return getPosts;
}

export default fetchPosts;