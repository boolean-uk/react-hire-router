import { useState } from 'react'
import HireForm from './HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
