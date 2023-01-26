import { useState } from "react"

function HireForm({ editPerson, currentWage }) {
  const [wage, setWage] = useState(currentWage)

  function handleSubmit(event) {
    event.preventDefault()
    editPerson(wage)
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