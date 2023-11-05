import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({ person, hiredPeople, setHiredPeople }) {

  const [wage, setWage] = useState(0)

  // navigate hook imported above and assigned to variable:
  const navigate = useNavigate()

  // on submit:
  function handleSubmit(event) {
    event.preventDefault()

    // create newHire person & add wage to existing person's details: 
    const newHire = {...person, wage: wage}

    // if first hired person -> store data in state with setHiredPerson function:
    if (hiredPeople.length === 0) {
      setHiredPeople([newHire])
      navigate("/")
    }
    // if people already in state, test whether a person exists in hiredPeople array:
    else {
      // if person already hired, return existing state:
      if (hiredPeople.some((person) => person.id.name === newHire.id.name)) {
        setHiredPeople([...hiredPeople])
      }
      // if person not yet hired, spread through hiredPeople state & add new person:
      else {
        setHiredPeople([...hiredPeople, newHire])
      }
    }
    // navigate back to Dashboard
    navigate("/")
  }
  console.log(hiredPeople)

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
