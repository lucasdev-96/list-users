import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { IUser } from '../interface/UserInterface';
import { userInfosInitial } from '../utils/userInitialValues';
import { FaUserAlt, FaRegAddressCard } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiCellphoneFill } from 'react-icons/ri'
import { HiLocationMarker } from 'react-icons/hi'
import { BsSignpostFill } from 'react-icons/bs'
import '../css/card.css'

function CardComponent() {
    const [user, setUser] = useState<IUser>(userInfosInitial)
    const [date, setDate] = useState('')
    useEffect(() => {
        const getUserInfos = localStorage.getItem('user')
        if (getUserInfos) {
            const getUser = JSON.parse(getUserInfos)
            setUser(getUser)
            const getDate = new Date(getUser.dob.date);
            setDate(getDate.toISOString().slice(0, 10));
        }

    }, [])
  return (
    <Card style={{ width: '25rem'}} border='secondary'>
      <Card.Img variant="top" className='card-user' bsPrefix='card-user' src={user.picture.large} />
      <Card.Body>
        <Card.Title>{`${user.name.title} ${user.name.first} ${user.name.last} `}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><FaUserAlt/>  {user.login.username}</ListGroup.Item>
        <ListGroup.Item><MdEmail /> {user.email}</ListGroup.Item>
        <ListGroup.Item><RiCellphoneFill /> {user.cell} / {user.phone}</ListGroup.Item>
        <ListGroup.Item><FaRegAddressCard /> {user.id.name}: {user.id.value}</ListGroup.Item>
        <ListGroup.Item><span className='spanInfos'>Date of birth: </span>{date}</ListGroup.Item>
        <ListGroup.Item><span className='spanInfos'>Age:</span> {user.dob.age}</ListGroup.Item>
        <ListGroup.Item><span className='spanInfos'>Country:</span> {user.location.country}</ListGroup.Item>
        <ListGroup.Item><span className='spanInfos'>State:</span> {user.location.state}</ListGroup.Item>
        <ListGroup.Item><span className='spanInfos'>City:</span> {user.location.city}</ListGroup.Item>
        <ListGroup.Item><HiLocationMarker />  <span className='spanInfos'>Street:</span> {user.location.street.number} {user.location.street.name}</ListGroup.Item>
        <ListGroup.Item><BsSignpostFill /> <span className='spanInfos'>Post code:</span>  {user.location.postcode}</ListGroup.Item>

      </ListGroup>
    </Card>
  );
}

export default CardComponent;