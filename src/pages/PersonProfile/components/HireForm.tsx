import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Person } from "../../../types"

interface props {
  person: Person;
  setHiredPeople: (people: Person[]) => void;
  hiredPeople: Person[];
}
function HireForm(props: props) {
  const { person, setHiredPeople, hiredPeople } = props
  const [wage, setWage] = useState<number>( person.wage || 0 ) 
  const navigate = useNavigate();

  function handleSubmit() {
    
    person.wage = wage
    if (!hiredPeople.includes(person)) {
      setHiredPeople([...hiredPeople, person])
      navigate('/')
    } else {
      navigate('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(parseInt(e.target.value))}
        value={wage}
      />
      <button type="submit">{!person.wage ? "Hire" : "Edit" }</button>
    </form>
  )
}

export default HireForm
