import axios from "axios";

const fetchPost = async (id) => {
    const getPost = await axios.get(`http://localhost:4000/page/content/${id}`);
    return getPost;
}

export default fetchPost;