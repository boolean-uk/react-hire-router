import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({ person, setHired }) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if(wage > 0){
      person.wage = wage
      setHired(person)
      navigate('/')
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
      <button type="submit"><b>{(person.wage > 0) ? 'Edit' : 'Hire'}</b></button>
    </form>
  )
}

export default HireForm
