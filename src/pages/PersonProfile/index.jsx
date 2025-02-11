import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import HireForm from './components/HireForm';

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const personId = useParams()
  const { people, hiredPeople, setHiredPeople } = props

  useEffect(() => {
      setPerson(people.find((p) => p.login.uuid === personId.id))
    }, [])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
    </article>
  )
}

export default PersonProfile
