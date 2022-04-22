import { useParams } from "react-router-dom";
import Post from "../components/postDetail/Post";
import { useState, useEffect } from "react";
import fetchPost from "../components/postDetail/fetchPost/fetchPost";

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