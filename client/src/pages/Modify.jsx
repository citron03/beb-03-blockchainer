import { useParams } from "react-router-dom";
import ModifyForm from "../components/modify/ModifyForm";
import { useState, useEffect } from "react";
import fetchPost from "../components/postDetail/fetchPost/fetchPost";

const Modify = () => {

    const postId = useParams().post_id;
    const [contentData, setContentData] = useState({});

    useEffect(() => {
        // 해당 포스트의 데이터를 받아온다.
        if(postId){
            fetchPost(postId)
                .then(el => {
                    setContentData(el.data.data);
                })
                .catch(err => console.log(err));
        }
    }, [postId])

    return (<ModifyForm data={contentData}/>);
}

export default Modify;