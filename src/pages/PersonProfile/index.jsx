/* eslint-disable react/prop-types */
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({ people, setHiredPeople }) {
  const { id } = useParams();
  const person = people.find(p => p.login.uuid === id)

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        person={person}
        setHiredPeople={setHiredPeople}
      />
    </article>
  )
}

export default PersonProfile
