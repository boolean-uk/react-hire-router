/* eslint-disable react/prop-types */ 

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({ person, hirePerson }) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  function handleSubmit(event) {
    event.preventDefault()
    hirePerson(person, wage)

    handleBack();
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
