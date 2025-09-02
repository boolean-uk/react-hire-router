import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { Link, useParams } from 'react-router-dom'

function PersonProfile(props) {
  const {people} = props
  const {id} = useParams()

  const [person, setPerson] = useState();

  useEffect(() => {
    const fetchPerson = async () => {
      const personById = people.results.find(p => p.login.uuid === id)
      setPerson(personById)
    }
    fetchPerson();
  })

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <img src={person.picture.medium}></img>
      <HireForm person={person} 
                hiredPeople={props.hiredPeople} 
                setHiredPeople={props.setHiredPeople} />
    </article>
  )
}

export default PersonProfile
