import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HireForm(props) {
  const navigate = useNavigate();
  const [wage, setWage] = useState(0)

  const {person, setHiredPeople, hiredPeople} = props
  function handleSubmit(event) {
    event.preventDefault();
    const personWithWage = { ...person, wage }; 
    setHiredPeople(prevHiredPeople => [...prevHiredPeople, personWithWage]); 
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
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
