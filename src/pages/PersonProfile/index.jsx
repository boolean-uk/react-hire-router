/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useLocation } from 'react-router-dom'

function PersonProfile({setHiredPeople, hiredPeople}) {
  const location = useLocation()
  const [person, setPerson] = useState(null)

  // console.log('location information', location)

  useEffect(() => {
    if (location.state) {
      setPerson(location.state)
}
}, [location, person])

if (!person) return <p>Loading...</p>


  // console.log(person)

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm 
      person={person} 
      setHiredPeople={setHiredPeople}
      hiredPeople={hiredPeople}
      />
    </article>
  )
}

export default PersonProfile
