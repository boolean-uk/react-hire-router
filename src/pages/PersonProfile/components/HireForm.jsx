import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function HireForm({ people, onHire }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [wage, setWage] = useState('')

  const person = people.find(p => p.login.uuid === id)
  if (!person) return <p>Person not found</p>

  const handleSubmit = e => {
    e.preventDefault()
    person.wage = wage
    onHire(person)
    navigate('/')
  }

  return (
    <div>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="wage">Wage Offer:</label>
        <input
          type="text"
          id="wage"
          value={wage}
          onChange={e => setWage(e.target.value)}
        />
        <button type="submit">Hire</button>
      </form>
    </div>
  )
}

export default HireForm
