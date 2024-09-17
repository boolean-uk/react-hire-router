import { useState } from 'react'

function HireForm(props) {
  const {navigateToDashboard, hirePerson, hired, editPerson } = props
  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    if(hired === false) {
      hirePerson(wage)
    } else {
      editPerson(wage)
    }
    navigateToDashboard()

  }

  return (
    <form onSubmit={handleSubmit}>
      {hired===false && <label htmlFor="wage">Wage</label>}
      {hired===true && <label htmlFor="wage">Edit wage</label>}
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={event => setWage(event.target.value)}
        value={wage}
      />
      {hired === false && <button type="submit">Hire</button>}
      {hired === true && <button type="submit">Edit</button>}
    </form>
  )
}

export default HireForm
