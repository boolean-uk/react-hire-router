import { useState, useEffect, useContext } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

import { AppContext } from '../../App'

function PersonProfile() {
  const { people } = useContext(AppContext)
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
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
