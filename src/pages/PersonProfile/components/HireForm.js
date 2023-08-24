import { useState } from "react"
import { useParams } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const { people } = props
  const { id } = useParams();

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <>
    {people.map((person) => {
    if (person.login.uuid === id) {
      return (
        <div>
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
    </>
  )
}

export default HireForm
