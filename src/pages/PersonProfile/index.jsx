import { useState } from 'react'
import HireForm from './components/HireForm'

import {useParams} from 'react-router-dom'

function PersonProfile({people, hiredPeople, setHiredPeople}) {
  //const [person, setPerson] = useState(null)
  const {id} = useParams();
  const person = people.find((p) => p.login.uuid === id)

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
