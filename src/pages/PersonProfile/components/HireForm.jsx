import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({ person, setHiredPeople, hiredPeople }) {
  const navigate = useNavigate();
  const [wage, setWage] = useState(person.wage || 0)

  function handleSubmit(event) {
    event.preventDefault()
    person.wage = wage
    person.hired = true
    if (!hiredPeople.includes(person)) {
      setHiredPeople([...hiredPeople, person])
    }
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
       <button type="submit">{!person.wage ? "Hire" : "Edit" }</button>
    </form>
  )
}

export default HireForm
