import { Link } from "react-router-dom";
import styled from "styled-components";
import handleTitle from "./useData/handleTitle";

const PostComponentContainer = styled.div`
    width: 15rem;
    height: fit-content;
    min-height: 8rem;
    border-bottom: 0.1rem solid #57606f;
    border-right: 0.1rem solid #57606f;
    border-left: 0.1rem solid #f1f2f6;
    border-top: 0.1rem solid #f1f2f6;
    padding: 1rem;
    margin: 1rem;
    text-align: center;
    box-shadow: 1px 1px #b2bec3;
    &:hover {
        transform: translate(-0.8px, -0.8px);
        box-shadow: 0.3px 0.3px #f1f2f6;
        background-color: #f2f2f2;
    }
`

const PostTextDiv = styled.div`
    color: black;
`;

const PostComponent = ({data}) => {
    return (
        <PostComponentContainer>
            <Link to={`/postdetail/${data.post_id}`}>
                <PostTextDiv>
                    <h2>{handleTitle(data.title)}</h2>
                    <p>{data.writer}</p>
                </PostTextDiv>
            </Link>
        </PostComponentContainer>
        );
}

export default PostComponent;