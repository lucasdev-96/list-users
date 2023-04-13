import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContextProvider';
import '../css/pagination.css';
function PaginationComponent() {
    const { users, setUsersPagination } = useContext(UserContext)
    const [itensPerPage, setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    const pages = Math.ceil(users.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    useEffect(() => {
      setUsersPagination(users.slice(startIndex, endIndex))
    }, [users])
    useEffect(() => {
      setUsersPagination(users.slice(startIndex, endIndex))
    }, [itensPerPage, currentPage])

    useEffect(() => {
      setCurrentPage(0)
    }, [itensPerPage])
  return (
    <div className='fatherPagination'>
    <div>
      <span>Items per page:</span>
      <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>

      </select>
     {Array.from(Array(pages), (item_, index) => {
      return <button style={{border: index !== currentPage ? 'none' : '' }} className='buttonsPagination' key={index} onClick={() => setCurrentPage(index)}>{index  + 1}</button>
     })}
    </div>
    </div>
  );
}

export default PaginationComponent;