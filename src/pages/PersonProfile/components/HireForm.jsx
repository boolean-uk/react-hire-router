/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useNavigate } from 'react-router-dom'
import { useState} from 'react'

export default function HireForm({ person, hiredPeople, setHiredPeople }) {
  const [wage, setWage] = useState(person.wage ? person.wage : 0);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    person.wage = wage;
    if (hiredPeople.includes(person)) {
      setHiredPeople([...hiredPeople]);
    } else {
      setHiredPeople([...hiredPeople, person])
    }
    navigate('/');
  }

  return (
   <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={event => setWage(event.target.value)}
        value={wage}
      />

      <button type="submit"> {person.wage ? 'Edit' : 'Hire'} </button>

    </form>


   </>
  )
}

