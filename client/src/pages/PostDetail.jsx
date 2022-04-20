import { useParams } from "react-router-dom";
import dummyPosts from "../assets/dymmydata/dummyPosts";
import Post from "../components/PostDetail/Post";

const PostDetail = () => {
    const id = useParams().post_id;
    const data = dummyPosts.filter(el => el.post_id === id)[0];
    return (
        <Post data={data}/>
    );
}

export default PostDetail;