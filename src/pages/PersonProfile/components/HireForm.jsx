import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";



function HireForm(props) {
  const [wage, setWage] = useState(0)
  const {setHiredPeople, person, hiredPeople} = props
  const navigate = useNavigate()
  
 
  function handleSubmit(event) {
    event.preventDefault()

    const updatedPerson = { ...person, wage: wage }

    const index = hiredPeople.findIndex(p => p.id === updatedPerson.id)

    if (index !== -1) {
      const updatedPeople = [...hiredPeople]
      updatedPeople[index] = updatedPerson
      setHiredPeople(updatedPeople)
    } else {
      setHiredPeople([...hiredPeople, updatedPerson])
    }
    navigate('/dashboard')
  }

  

  console.log("Wage:", wage)
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
