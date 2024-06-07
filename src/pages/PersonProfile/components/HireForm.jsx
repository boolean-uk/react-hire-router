import { useState } from 'react'

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const {person, hiredPeople, setHiredPeople} = props

  function handleSubmit(event) {
    event.preventDefault()
    const hiredPerson = { ...person, wage: wage }
    setHiredPeople([...hiredPeople, hiredPerson])
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
