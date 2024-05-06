/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({people, setHiredPeople, hiredPeople}) {
  const [person, setPerson] = useState(null)

  const urlParams = useParams()

  console.log(people)

  useEffect(() => {
    const profile = people.find(e => e.login.username === urlParams.username)
    setPerson(profile)
  }, [people , urlParams.username])
  
  

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>
    </article>
  )
}

export default PersonProfile
