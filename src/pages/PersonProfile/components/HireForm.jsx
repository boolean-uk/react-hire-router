/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({person, setHiredPeople}) {
  const [wage, setWage] = useState(0)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if(wage === 0){
      setError("You need to set a higher amount than 0")
      return;
    }
    const hired = structuredClone(person)
    hired.wage = wage;
    setHiredPeople(prev => [...prev, hired])
    navigate('/')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
      <p>{error}</p>
    </form>
  )
}

export default HireForm
