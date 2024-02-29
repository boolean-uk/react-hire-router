import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'


function PersonProfile({people, addHired}) {
  const [person, setPerson] = useState(null)
  const {id}= useParams()

  const matchingPerson = people.find(x => x.id.value === id)

  useEffect(() => {
    setPerson(matchingPerson)
  },[person])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} addHired={addHired} />
    </article>
  )
}

export default PersonProfile
