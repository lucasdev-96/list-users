import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { UserContext } from '../Context/UserContextProvider';
import '../css/table.css'
import { Link } from 'react-router-dom';
import { GoEye } from 'react-icons/go'

function TableComponent() {
  const {usersPagination, setUser} = useContext(UserContext)
  const returnUsers = () => {
    return usersPagination ? usersPagination.map((value: any, index: number) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td><img src={value.picture.thumbnail } alt='person image'/></td>
          <td>{`${value.name.first} ${value.name.last}`}</td>
          <td>{value.location.country}</td>
          <td>{value.login.username}</td>
          <td> <button className='buttonUserInfos' onClick={() => localStorage.setItem('user', JSON.stringify(value))}><Link to={`/user/${value.login.username}`}><GoEye /></Link></button></td>
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
          <th>More Infos</th>
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
