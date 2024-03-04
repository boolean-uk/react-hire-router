import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

function HireForm(props) {
  const [wage, setWage] = useState(0)

  const {person, hirePerson, hiredPeople} = props
  const navigate = useNavigate();
  const [created, setCreated] = useState(false)




  function handleSubmit(event) {
    event.preventDefault();

    // Check if the person is already hired
    const isAlreadyHired = hiredPeople.some((hiredPerson) => hiredPerson.id === person.id);

    if (isAlreadyHired) {
      
      alert('This person is already hired!');
    } else {
      
      hirePerson(person, wage);
      setCreated(true);
      navigate('/');
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
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
