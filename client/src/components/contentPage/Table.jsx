import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Tr = styled.tr`
    border: 1px solid black;
    cursor: pointer;
    &:hover {
        background-color: #f3f0f0;
    }
`

const Td = styled.td`
    padding: 2rem;
`

const Table = ({data}) => {
    const history = useHistory();

    const handleLink = () => {
        history.push(`/postdetail/${data.id}`)
    }    

    return (
    <Tr onClick={handleLink}>
        <Td>{data.id}</Td>
        <Td>{data.title}</Td>
        {/* <Td>{data.created_at}</Td>
        <Td>{data.updated_at}</Td> */}
        <Td>{data.writer}</Td>
    </Tr>
    );
}

export default Table;