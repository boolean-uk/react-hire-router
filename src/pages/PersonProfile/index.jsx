import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'

function PersonProfile({people, hire}) {

  const id =/[^/]*$/.exec(window.location.pathname)[0]
  const [person, setPerson] = useState(people[id])

  useEffect(() => {

  },[person])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hire={hire} />
    </article>
  )
}

export default PersonProfile
