import { useParams } from 'react-router-dom'
import PropTypes from "prop-types";
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const { people, hiredPeople, setHiredPeople } = props
  const {id} = useParams()
  const person = people.find((p) => p.login.uuid === id)

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
  people: PropTypes.array.isRequired,
  hiredPeople: PropTypes.array.isRequired,
  setHiredPeople: PropTypes.func.isRequired
}
export default PersonProfile
