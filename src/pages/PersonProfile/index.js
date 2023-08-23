import { useParams, useNavigate } from "react-router-dom"
import HireForm from "./components/HireForm"

function PersonProfile( {people, onHire}) {
  const navigate = useNavigate()
  const { uuid } = useParams() //use uuid to identify
  const person = people.find(p => p.login.uuid === uuid) // find the person with uuid

  function handleHire(person) {
    onHire(person)
    navigate('/')    //for navigating back to dash
  }

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <p>Email: {person.email}</p>
      <p>Phone: {person.phone}</p>
      <p>Location: {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}</p>
      <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
      <HireForm person={person} onHire={handleHire} />
    </article>
  )
}

export default PersonProfile
