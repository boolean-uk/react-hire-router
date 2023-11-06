import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function HireForm({hiredPeople, setHiredPeople, person}) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()


  const alreadyHired = hiredPeople.find( p => p.name.first=== person.name.first)



  function handleSubmit(event) {
    event.preventDefault()
    if (alreadyHired) {
      setWage(wage)
      const indexOfHiredPerson = hiredPeople.findIndex(p => p.name.first=== person.name.first)
      hiredPeople.splice(indexOfHiredPerson, 1, {...person, ["wage"]:wage}) 
    } else {
      setHiredPeople([...hiredPeople, {...person, ["wage"]:wage, hired: true}])
    }

  }

  useEffect( () => {
    setWage(person.wage)
  }, [person])


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
      <button type="submit" onClick={() => navigate(-1)}>Hire</button>
    </form>
  )
}

export default HireForm
