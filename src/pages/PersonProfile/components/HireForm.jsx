import { useState } from 'react'
import Dashboard from '../../Dashboard'
import { Link, Route, useNavigate } from 'react-router-dom'

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  const hiredPerson = props.hiredPeople.find(p => p.login.uuid === props.person.login.uuid);

  function handleSubmit(event) {
    event.preventDefault()
    if (hiredPerson) {
      hiredPerson.wage = wage;
    } else {
      props.setHiredPeople([...props.hiredPeople, { ...props.person, wage }])
    }
      navigate('/')
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
        {hiredPerson && "Edit" || "Hire"}
      </button>
    
    

    </form>
  )
}

export default HireForm
