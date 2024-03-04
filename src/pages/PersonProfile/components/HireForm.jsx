import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const { person, hirePerson } = props

  // Set wage to persons wage if hired
  const [wage, setWage] = useState(person.wage !== undefined ? person.wage : 0)

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    hirePerson({...person, wage: wage})
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
      <button type="submit">
        { // Change text based on if person is hired
        person.wage !== undefined ? "Update Salary": "Hire"
        }
      </button>
    </form>
  )
}

export default HireForm
