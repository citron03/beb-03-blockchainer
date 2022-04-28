import styled from "styled-components";
import Pagination from "../content/Pagination";
import Table from "./Table";
import { useState, useEffect } from "react";
import fetchPosts from "./fetchData/fetchPosts";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const TableContainer = styled.div`
    margin: 100px 1rem 1rem 1rem;
`

// const Tr = styled.tr`
//     border: 1px solid black;
// `

const Td = styled.td`
    padding: 1rem;
`

const PostButton = styled.button`
    background: #212529;
    color: #fff;
    padding: 0.3rem;
    width: 4rem;
    height: 3rem;
    margin: 0.5rem;
    border-radius: 2rem;
    &:hover {
        background: #4a5157;
    }
`;

const TableHeader = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #bccdd7;
    margin: 1rem;
`

const ContentPageTable = ({query = ""}) => {

    const page = useParams().page;
    const [postsArr, setPostsArr] = useState([]);
    const history = useHistory();
    const userName = useSelector(state => state.token.username);
    const reload = useSelector(state => state.reload.controller);

    useEffect(() => {
        if(!query) {
            // 모두 검색
            fetchPosts(page)
            .then(el => setPostsArr(el.data.data))
            .catch(err => console.log(err));
        } else {
            // 검색어 존재

        }
    }, [page, reload])

    return (
    <>
        <TableContainer>
            <TableHeader>
                <h2>게시글</h2>
                {userName.length > 0 ? 
                    <PostButton onClick={() => history.push('/write')}>글쓰기</PostButton>
                    : null}
            </TableHeader>
            <table style={{borderCollapse: "collapse", width: "100%"}}>
                <tbody>
                    <tr>
                        <Td>id</Td>
                        <Td>title</Td>
                        <Td>작성자</Td>
                        <Td>작성시간</Td>
                        <Td>수정시간</Td>
                    </tr>
                    {
                        postsArr.map(el => {
                            return (<Table key={el.id} data={el} />)
                        })
                    }
                </tbody>
            </table>
        </TableContainer>
        {query.length <= 0 ? <Pagination/> : null}
    </>
    );

}

export default ContentPageTable;