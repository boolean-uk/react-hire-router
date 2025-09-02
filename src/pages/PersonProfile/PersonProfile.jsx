import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'
import PeopleListItem from '../Dashboard/components/PeopleListItem';
/* eslint-disable react/prop-types */

function PersonProfile({ people, setHiredPeople }) {
  const { id } = useParams();
  const person = people.find((x) => x.id.value === id)

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        <ul className="no-bullets">
          <PeopleListItem person={person} link={false}/>
        </ul>
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople}/>
    </article>
  )
}

export default PersonProfile
