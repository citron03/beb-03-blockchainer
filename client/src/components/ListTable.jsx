import styled from "styled-components";

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
    width: 45%;
  }

  & tbody tr td {
    max-width: 5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1rem 0;
  }
`

const ListTable = ({ dataList, currentTab }) => {

  return (
    <Table className="table">
      {console.log(dataList)}
      <thead>
        {currentTab === 0 ?
          (<tr>
            <th scope="col" className="no">#</th>
            <th scope="col" className="title">글 제목</th>
            <th scope="col">작성일</th>
            <th scope="col">수정일</th>
          </tr>) : 
          (
          <tr>
            <th scope="col" className="no">#</th>
            <th scope="col" className="title">댓글 내용</th>
            <th scope="col">글 제목</th>
            <th scope="col">최종 수정일</th>
          </tr>
          )}
      </thead>
      <tbody>
        {dataList[0].map((el, index) => {
          console.log(el, index);

          if (currentTab === 0) {
            return (
              <tr>
                <th>{index + 1}</th>
                <td>{el.title}</td>
                <td>{el.created_at}</td>
                <td>{el.updated_at}</td>
              </tr>
            )
          } else if (currentTab === 1) {
            return (
              <tr>
                <th>{index + 1}</th>
                <td>{el.content}</td>
                <td>{el.created_at}</td>
                <td>{el.updated_at}</td>
              </tr>
            )
          }

          
        })}
      </tbody>
    </Table>
  );
}

export default ListTable;