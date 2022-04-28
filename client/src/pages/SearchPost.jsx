import { useParams } from "react-router-dom";
import ContentPageTable from "../components/contentPage/ContentPageTable";

const SearchPost = () => {
    const query = useParams().query;
    return (
        <ContentPageTable query={query}/>
    );
}

export default SearchPost;