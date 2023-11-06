/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function HireForm({person, setHiredPeople}) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  const goHome = () => navigate('/')

  function handleSubmit(event) {
    event.preventDefault()
    setHiredPeople(person)
    console.log(wage)
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button onClick={goHome} type="submit">Hire</button>
    </form>
  )
}

export default HireForm
