import PostsComponent from "../components/content/PostsComponent";
import ContentMain from "../components/content/ContentMain";
import { useParams } from "react-router-dom";

function Content() {
    const page = useParams().page;
    // console.log(page);
    return (
        <>
            <ContentMain/>
            <PostsComponent/>
        </>
    )
}

export default Content;