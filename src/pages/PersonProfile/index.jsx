import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const { id } = useParams()

  const {people, hirePerson, hiredPeople} = props

  console.log({ person });

  useEffect(() => {
    if (people && id) {
      const matchingPerson = people.find((p, index) => index === parseInt(id));
      setPerson(matchingPerson);
    }
  }, [people, id]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson={hirePerson} hiredPeople={hiredPeople}/>
    </article>
  )
}

export default PersonProfile
