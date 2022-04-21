import dummyComments from "../../assets/dymmydata/dummyComments";
import styled from "styled-components";
import Comment from "./Comment";

const CommentsContainer = styled.div`
    padding: 1rem;
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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