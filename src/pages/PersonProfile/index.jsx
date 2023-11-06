import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useLocation } from 'react-router-dom'

function PersonProfile({hiredPeople, setHiredPeople}) {
  const [person, setPerson] = useState(null)
  const location = useLocation()

  const displayPerson = () => {
    setPerson(location.state)
  }

  useEffect(displayPerson, [location])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm 
        person={person}
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople} 
      />
    </article>
  )
}

export default PersonProfile