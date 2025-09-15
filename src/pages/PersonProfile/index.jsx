/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom';

function PersonProfile(props) {
  const { people, hiredPeople, setHiredPeople } = props
  const { id } = useParams();

  const person = people[id]

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
