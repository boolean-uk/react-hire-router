import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({person, setPerson, setHiredPeople, hiredPeople}) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    if(wage < 1){
      console.log("wage must be atleast 1")
      return
    }

    if (hiredPeople.find(hiredPerson => hiredPerson.id === person.id)) {
      setHiredPeople(hiredPeople)
    }
    else {
      setHiredPeople([...hiredPeople, { ...person, wage }])
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
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
