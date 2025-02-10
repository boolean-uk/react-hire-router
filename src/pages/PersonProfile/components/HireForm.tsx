import { useState } from 'react'
import { Person } from '../../../objects/PersonInfoObjects'
import { Link, useNavigate } from 'react-router-dom';

function HireForm(props : {person : Person;
                          hirePerson: (person : Person) => void;
                          hired: Person[]
}) {
  const { person, hirePerson, hired } = props;
  const [wage, setWage] = useState(person.wage ?? 0)
  const navigate = useNavigate()
  function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
    person.wage = wage;
    if (!editMode()){
      hirePerson(person)
    }
    
    navigate("/")
    event.preventDefault()
  
  }

  const editMode = () => {
    return hired.filter((p) => p.login.uuid == p.login.uuid).length > 0; //Person already hired?
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(Number(e.target.value))}
        value={wage}
      />
      
      <button type="submit">{editMode() ? "Edit" : "Hire"}</button>
    
      
      
    </form>
  )
}

export default HireForm
