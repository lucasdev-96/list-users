import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { UserContext } from '../Context/UserContextProvider';

function DropDownComponent() {
    const {setGender} = useContext(UserContext)

  return (
    <Dropdown >
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Gender
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setGender('male')}>Male</Dropdown.Item>
        <Dropdown.Item>Female</Dropdown.Item>
      </Dropdown.Menu>
      
    </Dropdown>
  );
}

export default DropDownComponent;