import { useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({people, hirePerson}) {

  let { uuid } = useParams()
  const [person, setPerson] = useState(people.find(person => person.login.uuid == uuid))


  if (!person) return <p>Loading...</p> // Render a loading message while fetching data

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson={hirePerson} />
    </article>
  )
}

export default PersonProfile
