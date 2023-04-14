import { countries } from '../utils/arrayCountrys';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContextProvider';
import '../css/select.css'


function SelectComponent() {
    const value = Object.entries(countries)
    const { setNat, nat } = useContext(UserContext)
    
    const render = () => { 
            return value.map((value) => {
            return (
               <option key={value[0]} value={value[0]}>{value[1]}</option>
            )
        })
    }
  return (
    <>
     <select className='selectCountry' value={nat} onChange={(e) => setNat(e.target.value)} >
        {render()}
    </select>
    </>
  );
}

export default SelectComponent;