import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { UserContext } from '../Context/UserContextProvider';

function DropDownComponent() {
    const {setGender, gender} = useContext(UserContext)

  return (
    <Dropdown >
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        {gender ?  `${gender.charAt(0).toUpperCase()}${gender.slice(1)}` : 'Gender'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setGender('male')}>Male</Dropdown.Item>
        <Dropdown.Item onClick={() => setGender('female')}>Female</Dropdown.Item>
      </Dropdown.Menu>
      
    </Dropdown>
  );
}

export default DropDownComponent;