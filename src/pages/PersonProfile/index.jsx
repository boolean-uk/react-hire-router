import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const { people } = props
  const { hiredPeople } = props
  const { setHiredPeople } = props
  const { id } = useParams()

  const [person, setPerson] = useState(null)

  useEffect(() => {
    if (people && id) {
        const matchingPerson = people.find((p) => p.login.uuid === id);
        setPerson(matchingPerson);
    }
  }, [people, id])


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
