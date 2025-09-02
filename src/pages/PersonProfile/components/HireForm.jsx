/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HireForm({ person, hiredPeople, setHiredPeople }) {
  const [wage, setWage] = useState(0)

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()

    person.wage = wage;

    const newHiredPeopleList = hiredPeople.filter((p) => p.email !== person.email)

    setHiredPeople(newHiredPeopleList.concat(person))

    navigate('/')
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
