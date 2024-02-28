import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const [wage, setWage] = useState(0)

  const { person, addToHired } = props

  function handleSubmit(event) {
    event.preventDefault()
  }

  const navigate = useNavigate()

  const handleClick = () =>
  {
    navigate("/dashboard")
    person.wage = wage > 0 ? wage : undefined
    addToHired({person})
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
      <button onClick={() => handleClick()} type="submit">Hire</button>
    </form>
  )
}

export default HireForm
