import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({ person, hiredPeople, setHiredPeople }) {

  const navigate = useNavigate()

  const [wage, setWage] = useState(0)


  function handleSubmit(event) {
    event.preventDefault()
    
    if(hiredPeople.includes(person)){
      setHiredPeople([...hiredPeople])
    }
    else {
      const hiredperson = { ...person, wage: wage}
      setHiredPeople([...hiredPeople, hiredperson])
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
