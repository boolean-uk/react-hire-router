import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm( {person, hiredPeople, setHiredPeople} ) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    person.wage = wage;
    person.hired = true;

    setHiredPeople([...hiredPeople, person])
    console.log('added' + hiredPeople)
    navigate('/')
    setWage(0)
  }

  if(!person.hired){
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
  else{
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
        <button type="submit">Edit</button>
      </form>
    )
  }
}
  
export default HireForm
