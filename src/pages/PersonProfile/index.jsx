import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile({setHiredPeople, hiredPeople}) {
  const location = useLocation()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    if (location.state) {
      setPerson(location.state)
}
}, [location, person])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
      <HireForm 
      person={person} 
      setHiredPeople={setHiredPeople}
      hiredPeople={hiredPeople}
      />
    </article>
  )
}

export default PersonProfile
