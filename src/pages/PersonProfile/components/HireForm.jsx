import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({setHiredPeople, hiredPeople, person, wage, setWage}) {
  const navigate = useNavigate()

  function handleSubmit(event) {    
    event.preventDefault()

    if(!hiredPeople.includes(person)) {
      person.wage = wage
      setHiredPeople([
        ...hiredPeople,
        person
      ])
      navigate('/')
      setWage(0)
    }
  
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

