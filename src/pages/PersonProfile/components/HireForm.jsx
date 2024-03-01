import { useState } from 'react'

function HireForm(props) {

  const { hirePerson, editPerson, hired, navigateToDashboard} = props

  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    if(hired === false){
      hirePerson(wage)
    } else if(hired === true){
      editPerson(wage)
    }
    navigateToDashboard();
  }

  return (
    <form onSubmit={handleSubmit}>
      {hired === false && <label htmlFor="wage">Wage Offer</label>}
      {hired === true && <label htmlFor="wage">Edit Wage</label>}
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      {hired === false && <button type="submit">Hire</button>}
      {hired === true && <button type="submit">Edit</button>}
    </form>
  )
}

export default HireForm
