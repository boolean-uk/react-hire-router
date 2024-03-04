import { useParams } from "react-router-dom"
import HireForm from './components/HireForm'
import PropTypes from "prop-types"

function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  console.log(hiredPeople)
  const { id } = useParams();
  const person = people.find(person => person.login.uuid === id);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>
    </article>
  )
}

PersonProfile.propTypes = {
  hiredPeople: PropTypes.array.isRequired,
}


export default PersonProfile
