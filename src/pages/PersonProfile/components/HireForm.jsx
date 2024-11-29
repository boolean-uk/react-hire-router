import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm( { person, hiredPeople, setHiredPeople } ) {
  const [wage, setWage] = useState(0)

  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault()
    if ( hiredPeople.some(hp => hp.login.uuid === person.login.uuid) ){
      const updatedHired = hiredPeople.map(hp => 
          hp.login.uuid === person.login.uuid ? {...hp, wage:  wage} : hp
        );
      setHiredPeople(updatedHired)
    }
    else
      setHiredPeople((hired)=>[...hired, {...person, wage: wage}])
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
