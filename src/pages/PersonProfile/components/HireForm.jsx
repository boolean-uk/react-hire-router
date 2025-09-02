import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({person, hiredPeople, setHiredPeople}) {
  const personInHiredPeople = hiredPeople.find(p => p.login.uuid === person.login.uuid)
  const [wage, setWage] = personInHiredPeople ? useState(personInHiredPeople.wage) : useState(0)
  const navigate = useNavigate()

  console.log(personInHiredPeople)

  function handleSubmit(event) {
    event.preventDefault()
    if (personInHiredPeople){
      personInHiredPeople.wage = wage
    } else {
    setHiredPeople([...hiredPeople, {...person, wage}])
    }
    console.log(person.wage)
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
      {personInHiredPeople ? <button type="submit">Edit</button> : <button type="submit">Hire</button> }
      
    </form>
  )
}

export default HireForm
