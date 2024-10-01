/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

function EditForm({person, hiredPeople, setHiredPeople}) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    person.wage = wage;
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={event => setWage(event.target.value)}
        value={wage}
      />
        <button type="submit"> Hire </button>
    </form>

  )
}

export default EditForm
