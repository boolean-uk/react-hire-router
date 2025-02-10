import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const { people, hiredPeople, setHiredPeople } = props
  const { id } = useParams();

  useEffect(() => {
    setPerson(people?.find(person => id === person.id?.value));
  }, [people, id]);

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

export default PersonProfile
