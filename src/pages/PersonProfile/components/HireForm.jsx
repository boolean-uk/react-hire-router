import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const {person, hirePerson, firePerson} = props
  const [wage, setWage] = useState(person.wage? person.wage : 0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    person.wage = wage
    person.hired = true
    hirePerson(person)
    navigate("/")
  }
  
  const fire = (event) => {
    person.hired = false
    firePerson(person)
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
      <button type="submit">{!person.hired? 'Hire' : 'Edit'}</button>
      {person.hired && <button onClick={fire}>Fire</button>}
    </form>
  )
}

export default HireForm
