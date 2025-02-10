import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const { people, hiredPeople, setHiredPeople } = props
  const [person, setPerson] = useState(null)
  const { id } = useParams();


  useEffect(() => {
    if (people && id) {
      setPerson(people.find((person) => String(person.login.uuid) === String(id)));
    }
  }, [people, id]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <p>Gender: {person.gender}</p>
      <p>Nationality: {person.location.country}</p>
      <p>Contact: {person.email}</p>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>
    </article>
  )
}

export default PersonProfile