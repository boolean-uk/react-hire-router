import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function HireForm({ person, hiredPeople, setHiredPeople }) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if (hiredPeople.find(hiredPerson => hiredPerson.login.uuid === person.login.uuid)) {
      setHiredPeople(hiredPeople.map(hiredPerson => {
        if (hiredPerson.login.uuid === person.login.uuid) {
          return { ...person, wage }
        }
        return hiredPerson
      }))
    }
    else {
      setHiredPeople([...hiredPeople, { ...person, wage }])
    }
    navigate('/')
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
