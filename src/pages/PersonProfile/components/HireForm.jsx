import { useState } from 'react'
import Dashboard from '../../Dashboard'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */

function HireForm({person, hired, setHired}) {

  const [wage, setWage] = useState(0)
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
        setHired(hired => [...hired, person]);
        navigate("/")
  console.log("hired")
  console.log(hired)

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
