/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import HireForm from './components/HireForm'

function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  const { id } = useParams();
  const person = people[parseInt(id)]

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>
      <Link to="/">Back</Link>
    </article>
    
  )
}

export default PersonProfile
