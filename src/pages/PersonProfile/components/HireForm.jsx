import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({person, hiredPeople, setHiredPeople}) {
  const alreadyHiredPerson = hiredPeople.find(p => p.login.uuid === person.login.uuid)
  // If person exist set state to the person's wage, otherwise 0
  const [wage, setWage] = alreadyHiredPerson ? useState(alreadyHiredPerson.wage) : useState(0);
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if(alreadyHiredPerson){
      alreadyHiredPerson.wage = wage
    }
    else{
      setHiredPeople([
      ...hiredPeople, {... person, wage}
      ])
    }
    console.log(person, wage)
    navigate('/')
  }

  const buttonStr = alreadyHiredPerson ? "Edit" : "Hire"

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
      <button type="submit">{buttonStr}</button>
    </form>
  )
}

export default HireForm
