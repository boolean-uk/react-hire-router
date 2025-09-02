import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function HireForm(props) {
  const [wage, setWage] = useState(0)

  const navigate = useNavigate()

  const { setHiredPeople, person, setPeople } = props

  function handleSubmit(event) {
    event.preventDefault()
    setHiredPeople(prev => [...prev, person])
    setPeople(current => 
      current.filter(curr => curr.login.uuid != person.login.uuid)
    )
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
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
