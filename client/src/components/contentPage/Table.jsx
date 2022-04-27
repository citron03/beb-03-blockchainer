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

const parseDate = (input) => {
    const date = new Date(input);
    const str = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} 
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return str;
  }

const Table = ({data}) => {
    const history = useHistory();

    const handleLink = () => {
        history.push(`/postdetail/${data.id}`)
    }    

    return (
    <Tr onClick={handleLink}>
        <Td style={{width: "10%"}}>{data.id}</Td>
        <Td style={{width: "55%"}}>{data.title}</Td>
        <Td style={{width: "15%"}}>{data.writer}</Td>
        <Td style={{width: "10%"}}>{parseDate(data.createdAt)}</Td>
        <Td style={{width: "10%"}}>{parseDate(data.updatedAt)}</Td>
    </Tr>
    );
}

export default Table;