import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const [wage, setWage] = useState(0)

  const {person, setHiredPeople, hiredPeople} = props ?? {}

 
  useEffect(() => {
    const currentPerson = hiredPeople.find((pers) => pers.login.uuid === person.login.uuid);
    console.log(currentPerson)
    if(currentPerson.wage) {
      setWage(currentPerson.wage)

    }
  }, []);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    if(wage <= 0 ) {
      return
    }
    if(hiredPeople.find((pers) => pers.login.uuid === person.login.uuid) !== undefined) {
      setHiredPeople(hiredPeople.map((pers) => pers.login.uuid === person.login.uuid ? {...pers, wage : wage} : pers))
    } else {
      setHiredPeople([...hiredPeople, {...person, wage : wage}])
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
