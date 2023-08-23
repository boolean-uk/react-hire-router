import { useState } from "react"
import { useNavigate } from "react-router-dom"

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const [editState, setEditState] = useState(false)
  const {person, hiredPeople, setHiredPeople, people, setPeople} = props
  
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if (!editState) {
      setHiredPeople([...hiredPeople, {
        ...person,
        wage
      }])
      const index = people.findIndex(notHired => notHired.login.uuid === person.login.uuid)
      people[index].hired = true
      setPeople([...people])
    } else {
      const index = hiredPeople.findIndex(hired => hired.login.uuid === person.login.uuid)
      hiredPeople[index].wage = wage
      setHiredPeople([...hiredPeople])
    }
    navigate('/')
  }

  if (!editState) {
    if (person.wage) {
      setEditState(true)
      setWage(person.wage)
    }
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
      <button type="submit">
        {!editState && <>Hire</>}
        {editState && <>Edit</>}
      </button>
    </form>
  )
}

export default HireForm
