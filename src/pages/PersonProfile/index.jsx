import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({people, setHiredPeople, hiredPeople}) {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    setPerson(people.find(p => p.login.uuid == id))
  }, [])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person}
      setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>
    </article>
  )
}

export default PersonProfile
