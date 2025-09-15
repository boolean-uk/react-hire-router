/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const {person, hiredPeople, setHiredPeople} = props
  const [wage, setWage] = useState(0)
  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault()
    if(!hiredPeople.some((hiredPerson) => hiredPerson.login.uuid === person.login.uuid))
      {
        setHiredPeople([...hiredPeople, { ...person, wage}])
      }
      else
      {
        setHiredPeople(hiredPeople.map((hiredPerson) => hiredPerson.login.uuid === person.login.uuid ? {...hiredPerson, wage} :hiredPerson ))
      }
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
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
