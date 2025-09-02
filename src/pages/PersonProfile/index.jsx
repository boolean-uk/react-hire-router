import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

function PersonProfile({personHire}) {
  // const [person, setPerson] = useState(null)

  const location = useLocation();
  const {state} = location 
  const person = state.person
  console.log("Person", person)

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} personHire={personHire} />
    </article>
  )
}

export default PersonProfile
