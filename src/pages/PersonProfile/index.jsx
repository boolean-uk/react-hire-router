import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const { uuid } = useParams()
  const { people, setHiredPeople } = props
  const [person, setPerson] = useState(null)

  useEffect(() => {
    const foundPerson = people.find((p) => p.login.uuid === uuid);
    setPerson(foundPerson);
  }, [person, uuid]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} />
    </article>
  )
}

export default PersonProfile

