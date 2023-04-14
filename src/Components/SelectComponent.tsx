
import { useContext } from 'react';
import { UserContext } from '../Context/UserContextProvider';
import { Select, CaretIcon, ModalCloseButton } from 'react-responsive-select';
import { countries } from '../utils/arrayCountrys';
import '../css/select.css'


function SelectComponent() {
    const { setNat } = useContext(UserContext)
  return (
    <>
      <Select
      name="countries"
      modalCloseButton={<ModalCloseButton />}
      options={countries}
      caretIcon={<CaretIcon />}
      onChange={(newValue: any) => setNat(newValue.value)}
    />
    </>
  );
}

export default SelectComponent;