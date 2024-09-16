import { useState, useContext } from 'react'
import { hiredPeopleContext } from '../../../App'
import { useNavigate } from 'react-router-dom';

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const { hiredPeople, setHiredPeople } = useContext(hiredPeopleContext);
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    console.log("Hiring: ", props.person, wage)
    // set the wage for the person
    props.person.wage = wage
    props.person.index = props.index
    setHiredPeople([...hiredPeople, props.person])
    navigate("/")
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
