import { useParams } from "react-router-dom";
import axios from "axios";
import ModifyForm from "../components/modify/ModifyForm";
import { useState, useEffect } from "react";

const Modify = () => {

    const postId = useParams().post_id;
    const [contentData, setContentData] = useState({});
    console.log(postId);

    useEffect(() => {
        // 해당 포스트의 데이터를 받아온다.
        if(postId){
            const url = `http://localhost:4000/content/${postId}`;
            // axios.get(url). then(el => {
            //     console.log(el);
            //     setContentData(el);
            // })
        }
    }, [postId])

    return (<ModifyForm data={contentData}/>);
}

export default Modify;