import { useParams } from "react-router-dom";
import Post from "../components/postDetail/Post";
import { useState, useEffect } from "react";
import fetchPost from "../components/postDetail/fetchPost/fetchPost";
import { useSelector } from "react-redux";

const PostDetail = () => {
    const id = useParams().post_id;
    const [data, setData] = useState([]);
    const reload = useSelector(state => state.reload.controller);

    useEffect(() => {
        if(id){
            fetchPost(id)
                .then(el => { 
                    setData(el.data.data) 
                })
                .catch(err => console.log(err));
        }
    }, [id, reload])

    return (
        <Post data={data}/>
    );
}

export default PostDetail;