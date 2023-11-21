import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function HireForm({person, hiredPeople, setHiredPeople}) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    const newHire = {...person, wage: wage}
    const newPeople = [...hiredPeople, newHire]
    setHiredPeople(newPeople)
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