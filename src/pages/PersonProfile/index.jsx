import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile({ people, hirePerson }) {
  const { id } = useParams()

  const person = people.find((p) => p.login.uuid === id)

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
      <p>Location: {person.location.city}, {person.location.country}</p>

      <HireForm person={person} hirePerson={hirePerson} />
    </article>
  )
}

export default PersonProfile
