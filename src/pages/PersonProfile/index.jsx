/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

export default function PersonProfile({people, hiredPeople, setHiredPeople}) {

  const { id }  = useParams();
  const [person, setPerson] = useState(null)

  useEffect(() => {

    const foundedperson = people.find((person) => person.login.uuid === id)

    if (foundedperson) {
      setPerson(foundedperson)
    }

  } , [people, id]
  )

  

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        <img src={person.picture.large} />

        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
    </article>
  )
}


