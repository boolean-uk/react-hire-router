import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AppContext } from '../../../App'

function HireForm({ person }) {
  const { hiredPeople, setHiredPeople } = useContext(AppContext)
  const [wage, setWage] = useState(0)

  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault()
    setHiredPeople([...hiredPeople, { ...person, wage }])
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
