import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { UserContext } from '../Context/UserContextProvider';
import '../css/table.css'

function TableComponent() {
  const {usersPagination} = useContext(UserContext)
  const returnUsers = () => {
    return usersPagination ? usersPagination.map((value: any, index: any) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td><img src={value.picture.thumbnail } alt='person image'/></td>
          <td>{`${value.name.first} ${value.name.last}`}</td>
          <td>{value.location.country}</td>
          <td>{value.login.username}</td>
          </tr>

      )
    }) : <tr><td>Users Not Found</td></tr>
  }
  return (
    <>
    {usersPagination.length > 0 ? <Table responsive="lg"  striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th>Name</th>
          <th>Country</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {returnUsers()}
      </tbody>
    </Table> : 'Loading...'}
    
    </>
  );
}

export default TableComponent;
