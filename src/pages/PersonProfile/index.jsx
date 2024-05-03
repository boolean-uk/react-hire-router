import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import HireForm from './components/HireForm'

function PersonProfile(props) {
  const { people, displayHiredPeople } = props

  const [person, setPerson] = useState(null)

  const params = useParams()

  useEffect(() => {   
    for (let i = 0; i < people.length; i++) {
      if (params.id === people[i].login.uuid) 
        setPerson(people[i])
    }
  }, [params, people])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm 
        person={person} 
        displayHiredPeople={displayHiredPeople}
      />
    </article>
  )
}

export default PersonProfile