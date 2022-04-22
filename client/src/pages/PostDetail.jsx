import { useParams } from "react-router-dom";
import dummyPosts from "../assets/dymmydata/dummyPosts";
import Post from "../components/postDetail/Post";
import axios from "axios";
import { useState, useEffect } from "react";

const fetchPost = async (id) => {
    const getPost = await axios.get(`http://localhost:4000/page/content/${id}`);
    return getPost;
}

const PostDetail = () => {
    const id = useParams().post_id;
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchPost(id)
            .then(el => setData(el.data.data))
            .catch(err => console.log(err));
    }, [id])

    return (
        <Post data={data}/>
    );
}

export default PostDetail;