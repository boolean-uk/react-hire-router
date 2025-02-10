import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom';

function PersonProfile(props) {
  const { people } = props
  const [person, setPerson] = useState(null)

  const { id } = useParams();

    useEffect(() => {
        if (people && id) {
            const matchingPerson = people.find((person) => 
                person.id.value === id
            )
            setPerson(matchingPerson)
        }
    }, [people, id])

    if (!person) return <div>Loading...</div>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={props.setHiredPeople} />
    </article>
  )
}

export default PersonProfile
