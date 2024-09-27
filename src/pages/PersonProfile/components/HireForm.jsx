import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import Alert from '@mui/material/Alert'

function HireForm(props) {
  const {person, hiredPeople, setHiredPeople} = props
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    // Spread person to hiredPeople and also add wage attribute:
    if (hiredPeople.find(p => p.id.value === person.id.value)) {
      // Map hiredPeople => if true -> set new wage else return the same
      const updatedPeople = hiredPeople.map(p => {
        if (p.id.value === person.id.value) {
          return { ...p, wage: wage }; // Update the wage for the existing person
        }
        return p; // Return other people without changes
      });
        setHiredPeople(updatedPeople)
    }

    else{
        setHiredPeople([...hiredPeople, {...person, wage}]) 
    }
    
    navigate('/')   // Switch to dashboard
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
