/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const {person, hirePerson} = props
  const navigate = useNavigate();

  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    if(!person.wage) {
      person.wage = wage
      hirePerson(person)
    }
    else {
      person.wage = wage
    }
    navigate('/')
  }

  useEffect(() => {
  if (person.wage) 
    setWage(person.wage)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        placeholder='£'
        value={wage}
        onChange={e => setWage(e.target.value)}
      />
      <button type="submit">{person.wage ? "edit" : "Hire"}</button>
    </form>
  )
}

export default HireForm
