import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const { id } = useParams()


  useEffect(() => {
    if (props.people && id) {
      const matchingPerson = props.people.find((person) => Number(person.id.value) === Number(id))
      setPerson(matchingPerson)
    }
  }, [person, id])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={props.hiredPeople} setHiredPeople={props.setHiredPeople}/>
    </article>
  )
}

export default PersonProfile
