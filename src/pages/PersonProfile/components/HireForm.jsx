import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({hiredPeople, setHiredPeople, person}) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  const hirePerson = (updatedPerson) => {
    setHiredPeople(prevHiredPeople => [...prevHiredPeople, updatedPerson])
  }


  function handleSubmit(event) {
    event.preventDefault()
    const updatedPerson = {...person, wage: wage}
    
  if (!hiredPeople.some(p => p.login.uuid === person.login.uuid)) {
    hirePerson(updatedPerson)
    navigate('/')
  }
  else{
    alert("This person is already hired")
    navigate('/')
  }
}

 

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={edit => setWage(edit.target.value)}
        value={wage}
      />
      <button type="submit"> {!person.wage ? 'Hire' : 'Edit'} </button>
    </form>
  )
}

export default HireForm
