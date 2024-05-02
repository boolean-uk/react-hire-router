import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const { person, hiredPeople, setHiredPeople } = props
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()
  

  function handleSubmit(event) {
    event.preventDefault()
    if (wage > 0) {person.wage = wage}
    hiredPeople.includes(person) ? null : setHiredPeople([...hiredPeople, person])
    navigate('/dashboard')
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
      <button type="submit">{hiredPeople.includes(person) ? 'Update' : 'Hire'}</button>
    </form>
  )
}

export default HireForm
