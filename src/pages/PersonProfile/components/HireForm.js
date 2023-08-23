import { useState } from "react"
import { useNavigate } from "react-router-dom"
function HireForm({person, onHire}) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const hiredPerson = {...person, wage} // merging person with wage
    onHire(hiredPerson) // hiring
    navigate('/') // for navigating back to dash
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
        min="0" //to make sure the value isnt negative
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
