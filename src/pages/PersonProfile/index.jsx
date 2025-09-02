import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({people, hirePerson, navigate}) {

  const {id} = useParams();
  const person = people.find(p => p.login.uuid === id);
  
  if (!person) return <p>User not found.</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm hirePerson={hirePerson} navigate={navigate} personId={id} />
    </article>
  )
}

export default PersonProfile
