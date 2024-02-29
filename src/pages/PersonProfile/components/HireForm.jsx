/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const {person, hirePerson} = props
  const navigate = useNavigate();

  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    person.wage = wage
    hirePerson(person)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        placeholder='£'
        value={person.wage}
        onChange={e => setWage(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>Hire</button>
    </form>
  )
}

export default HireForm
