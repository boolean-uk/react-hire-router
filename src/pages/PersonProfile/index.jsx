import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({ people, setHired }) {
  const [person, setPerson] = useState(null)

  const personId = useParams()
  console.log("peson ID ", personId.id)

  useEffect(() => {
      const personToAdd = people.find((p) => p.login.uuid === personId.id)
      setPerson(personToAdd)
    }, [])
  
  if (!person) return <p>Loading...</p>
  console.log(person)

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHired={setHired} />
    </article>
  )
}

export default PersonProfile
