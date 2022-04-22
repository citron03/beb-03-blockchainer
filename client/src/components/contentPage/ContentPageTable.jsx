import styled from "styled-components";
import Pagination from "../content/Pagination";
import Table from "./Table";
import { useState, useEffect } from "react";
import fetchPosts from "./fetchData/fetchPosts";
import { useParams } from "react-router-dom";

const TableContainer = styled.div`
    margin: 100px 1rem 1rem 1rem;
`

const Tr = styled.tr`
    border: 1px solid black;
`

const Td = styled.td`
    padding: 1rem;
`

const ContentPageTable = () => {

    const page = useParams().page;
    const [postsArr, setPostsArr] = useState([]);

    useEffect(() => {
        if(page){
            fetchPosts(page)
                .then(el => setPostsArr(el.data.data))
                .catch(err => console.log(err));
        }
    }, [page])

    return (
    <>
        <TableContainer>
            <h2>게시글</h2>
            <table style={{borderCollapse: "collapse", width: "100%"}}>
                <tbody>
                    <tr>
                        <Td>id</Td>
                        <Td>title</Td>
                        {/* <Td>작성시간</Td>
                        <Td>수정시간</Td> */}
                        <Td>작성자</Td>
                    </tr>
                    {
                        postsArr.map(el => {
                            return (<Table key={el.id} data={el} />)
                        })
                    }
                </tbody>
            </table>
        </TableContainer>
        <Pagination/>
    </>
    );

}

export default ContentPageTable;