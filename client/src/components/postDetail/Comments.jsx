import dummyComments from "../../assets/dymmydata/dummyComments";
import styled from "styled-components";
import Comment from "./Comment";

const CommentsContainer = styled.div`
    padding: 1rem;
    border-top: 0.1rem solid #95afc0;
    margin-top: 2rem;
`;

const Comments = ({post_id}) => {
    return (
    <CommentsContainer>
        <h2>Comments</h2>
        {dummyComments.map((el) => {
            return <Comment key={el.comment_id} data={el} post_id={post_id}/>
        })}
    </CommentsContainer>);
}

export default Comments;