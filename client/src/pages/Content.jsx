import PostsComponent from "../components/content/PostsComponent";
import ContentMain from "../components/content/ContentMain";
import styled from "styled-components";

const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

function Content() {
    return (
        <ContentSection>
            <ContentMain/>
            <PostsComponent/>
        </ContentSection>
    )
}

export default Content;