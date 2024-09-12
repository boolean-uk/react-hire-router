import { useState, useEffect, useContext } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

import { AppContext } from '../../App'

function PersonProfile() {
  const { people, hiredPeople } = useContext(AppContext)
  const [person, setPerson] = useState(null)
  
  const uuid = useParams()

  useEffect(() => {
    people.find((person) => {
      if (person.login.uuid === uuid.id) {
        setPerson(person)
      }
    })
  }, [])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {hiredPeople.find((hp) => hp.login.uuid === person.login.uuid) ? <p>Hired</p> : <HireForm person={person} />}
    </article>
  )
}

export default PersonProfile
