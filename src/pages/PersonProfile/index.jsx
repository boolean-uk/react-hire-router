import { useState } from 'react'
import HireForm from './components/HireForm'
/* eslint-disable react/prop-types */

function PersonProfile({personn, hired, setHired}) {
  console.log("personn")
  console.log(personn)
  const [person, setPerson] = useState(personn)

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hired={hired} setHired={setHired} />
    </article>
  )
}

export default PersonProfile
