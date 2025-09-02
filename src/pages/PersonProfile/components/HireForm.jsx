import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
/* eslint-disable react/prop-types */

function HireForm({ person, setHiredPeople }) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const updatedPerson = {...person, wage: wage}

    setHiredPeople(prev => 
      prev.some(p => p.id.value === updatedPerson.id.value) 
      ? prev.map(p => p.id.value === updatedPerson.id.value ? { ...p, ...updatedPerson } : p
      ) : [...prev, updatedPerson]
    )
    navigate("/dashboard")
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
