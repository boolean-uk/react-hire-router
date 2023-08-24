import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const { people, hiredPeople, setHiredPeople } = props
  const { id } = useParams()

  function handleSubmit(event) {
    event.preventDefault()
    const hiredPerson = people.find((person) => person.login.uuid === id)
    setHiredPeople([...hiredPeople, hiredPerson])
  }

  useEffect(() => {
  }, [hiredPeople])

  return (
    <>
    {people.map((person) => {
    if (person.login.uuid === id) {
      return (
        <div key={person.login.uuid}>
          <ul>
             <li>Email: {person.email}</li>
             <li>Phone: {person.phone}</li>
             <li>City: {person.location.city}</li>
             <li>Address: {person.location.street.name}, {person.location.street.number}</li>
          </ul>
        </div>
      );
    } return null;
  })}
    
    <form onClick={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <Link to="/"><button type="submit">Hire</button></Link>
    </form>
    </>
  )
}

export default HireForm
