import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const {people, hirePerson} = props
  const [person, setPerson] = useState(null)
  const {id} = useParams();

  useEffect(() => {
    if (people && id) {
        const matchingPerson = people.find((person) => {
            return Number(person.id) === Number(id)
        }
        
        )
        setPerson(matchingPerson)
        
    }
}, [people, id])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson={hirePerson}/>
    </article>
  )
}

export default PersonProfile
