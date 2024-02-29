import { useParams } from 'react-router-dom'
import { useState } from 'react'
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const {people, setHiredPeople} = props
  const {id} = useParams()
  const person = people.find((person) => person.login.uuid === id);

  if (!person) return <p>Loading...</p>

  return (
    <article className="person-profile">
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople}/>
    </article>
  )
}

export default PersonProfile
