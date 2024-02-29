import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const {hirePerson, person, hiredPeople} = props
  const navigate = useNavigate()
  const [wage, setWage] = useState(props.person.wage ? props.person.wage : 0)

  function handleSubmit(event) {
    event.preventDefault()
    if (hiredPeople.includes(person)){
      hirePerson(prevHires => prevHires.map(p => {
        if (p === person){
          return {
            ...person,
            wage: wage
          }          
        }
        return p
      }))
    }
    else{
      hirePerson(prevHires => [...prevHires, {...person, wage:wage}])
    }    
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
      <button type="submit" onClick={handleSubmit}>Hire</button>
    </form>
  )
}

export default HireForm
