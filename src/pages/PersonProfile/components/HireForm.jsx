import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const [wage, setWage] = useState(0)

  const {person, hiredPeople, setHiredPeople} = props

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    person.wage = wage
    person.hired = true;

    const findPerson = hiredPeople.find((hiredPerson) => hiredPerson.id.value === person.id.value)
    if(findPerson) {
        setHiredPeople([...hiredPeople])
      }else (
        setHiredPeople([...hiredPeople, person])
    )

    navigate('/dashboard')
  }

  useEffect(() => {
    person.hired && setWage(person.wage);
  }, [person]);

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
      <button type="submit">{person.hired? "Edit Wage" : "Hire"}</button>
    </form>
  )
}

export default HireForm
