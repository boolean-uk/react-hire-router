import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const { id } = useParams()
  const { people, hiredPeople, setHiredPeople } = props

  useEffect(() => {
    if (people && id) {
      const matchingPerson = people.results.find((person) =>
      person.login.uuid === id)
      setPerson(matchingPerson)
    }
  }, [people, id])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <img src={person.picture.medium} alt={`${person.name.title} ${person.name.first} ${person.name.last}`}/>
      <h3>Contact information</h3>
      <p>E-Mail: {person.email}</p>
      <p>Phone: {person.phone}</p>
      <p>Cellphone: {person.cell}</p>
      <HireForm 
        person={person} 
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
      />
    </article>
  )
}

export default PersonProfile
