import { useState } from 'react'
import PropTypes from "prop-types"

function HireForm({person, setHiredPeople}) {
  const [wage, setWage] = useState(person?.wage ? person.wage : 0)

  function handleSubmit(event) {
    event.preventDefault()

    person.wage = wage
    setHiredPeople(prevPeople => 
      prevPeople.find(p => p.login.uuid === person.login.uuid) ? 
      prevPeople : [...prevPeople, person])
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
      <button type="submit" onClick={handleSubmit}>Hire</button>
    </form>
  )
}

HireForm.propTypes = { 
  setHiredPeople: PropTypes.array.isRequired,
  person: PropTypes.object.isRequired
}

export default HireForm