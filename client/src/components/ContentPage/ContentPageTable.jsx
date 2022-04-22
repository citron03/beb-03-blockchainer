import styled from "styled-components";
import Pagination from "../content/Pagination";
import Table from "./Table";
import dummyPosts from "../../assets/dymmydata/dummyPosts";

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
    return (
    <>
        <TableContainer>
            <h2>게시글</h2>
            <table style={{borderCollapse: "collapse"}}>
                <tbody>
                    <tr>
                        <Td>id</Td>
                        <Td>title</Td>
                        {/* <Td>작성시간</Td>
                        <Td>수정시간</Td> */}
                        <Td>작성자</Td>
                    </tr>
                    {
                        dummyPosts.map(el => {
                            return (<Table key={el.post_id} data={el} />)
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