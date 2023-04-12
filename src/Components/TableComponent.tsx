import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { UserContext } from '../Context/UserContextProvider';

function TableComponent() {
  const {users} = useContext(UserContext)
  const returnUsers = () => {
    return users ? users.map((value: any, index: any) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td><img src={value.picture.thumbnail } alt='person image'/></td>
          <td>{value.name.first}</td>
          <td>{value.name.last}</td>
          <td>{value.login.username}</td>
          </tr>

      )
    }) : <tr><td>Users Not Found</td></tr>
  }
  return (
    <Table responsive="lg"  striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {returnUsers()}
      </tbody>
    </Table>
  );
}

export default TableComponent;
