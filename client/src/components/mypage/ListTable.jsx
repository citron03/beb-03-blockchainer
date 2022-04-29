import styled from "styled-components";
import { useHistory } from "react-router-dom";
import parseDate from '../parsingData/parseDate';

const Table = styled.table`
  width: 60%;
  table-layout:fixed;
  border: 1px solid lightgray;

  & thead tr th {
    padding: 1rem 0;
    background-color: #f2f2f2;
    color: black;
  }

  & thead tr th.no {
    width: 10%;
  }

  & thead tr th.title {
    width: 35%;
  }

  & thead tr th.token {
    width: 10%;
  }

  & tbody tr td.msg {
    color: gray;
  }

  & tbody tr td {
    max-width: 5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1rem 0;
  }

  & tbody tr:hover {
    background-color: #f2f2f2;
  }
`

const ListTable = ({ dataList, currentTab }) => {
  const history = useHistory();

  const handleClick = (id) => {
    // console.log(id);
    history.push(`/postdetail/${id}`);
  }

  return (
    <Table className="table">
      {/* {console.log(dataList)} */}
      <thead>
        {currentTab === 0 ?
          (<tr>
            <th scope="col" className='no'>#</th>
            <th scope="col" className='title'>글 제목</th>
            <th scope="col">작성일</th>
            <th scope="col">수정일</th>
            <th scope="col" className='token'>토큰 보상</th>
          </tr>) : 
          (
          <tr>
            <th scope="col" className='no'>#</th>
            <th scope="col" className='title'>댓글 내용</th>
            <th scope="col">글 제목</th>
            <th scope="col">작성일</th>
            <th scope="col" className='token'>토큰 보상</th>
          </tr>
          )}
      </thead>
      <tbody>
        {dataList.length === 0 ? 
        (<tr>
          <td colspan='5' className='msg'>검색 결과가 없습니다</td>
        </tr>) :
        (dataList.map((el, index) => {
          if (currentTab === 0) {
            
            return (
              <tr key={index} onClick={() => { handleClick(el.id) }}>
                <th>{index + 1}</th>
                <td>{el.title}</td>
                <td className='date'>{parseDate(el.createdAt)}</td>
                <td className='date'>{parseDate(el.updatedAt)}</td>
                <td>+2</td>
              </tr>
            )
          } else {
            return (
              <tr key={index} onClick={() => { handleClick(el.post_id) }}>
                <th>{index + 1}</th>
                <td>{el.content}</td>
                <td>{el.Post.title}</td>
                <td className='date'>{parseDate(el.createdAt)}</td>
                <td>+1</td>
              </tr>
            )
          }
        }))}
      </tbody>
    </Table>
  );
}

export default ListTable;