import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";


function HireForm({hiredPeople, setHiredPeople, person}) {
  const [wage, setWage] = useState(0)
  const [hired, setHired] = useState(false)
//  const [hiredPeople, setHiredPeople] = useState([])
  const navigate = useNavigate();


  person.wage = wage;
  person.hired = hired;

  function handleHire (event){
    event.preventDefault();
    setHired(hired => !hired)
    setHiredPeople(hiredPeople => [...hiredPeople, person]);
    navigate('/');
  }
  console.log(hiredPeople);
  
  

  return (
    <form onSubmit={handleHire}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
HireForm.propTypes = {
  setHiredPeople: PropTypes.func,
  hiredPeople: PropTypes.array,
  person: PropTypes.object
};