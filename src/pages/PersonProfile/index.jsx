/* eslint-disable react/prop-types */
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({people, setHiredPeople}) {
  const {id} = useParams();
  const person = people.find((x) => x.login.uuid === id)
  
  if (!person) return <p>Loading...</p>

  return (
    <article>
      <img src={person.picture.large} alt="" />
      <h2>
        {person.name.title} {person.name.first} {person.name.last}
      </h2>
      <ul>
        <li>Location: {person.location.country}</li>
        <li>Email: {person.email}</li>
        <li>Phone: {person.cell}</li>
      </ul>
      <HireForm person={person} setHiredPeople={setHiredPeople} />
    </article>
  )
}

export default PersonProfile
