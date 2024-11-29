import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile({people, setHiredPeople, hiredPeople}) {
  const [person, setPerson] = useState(null)
  const{id} = useParams()

  useEffect (() => {
  if(people && id){
    setPerson(people.find((person) => Number(person.id) === Number(id)))
  }
  }, [people, id])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setPerson={setPerson} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>
    </article>
  )
}

export default PersonProfile
