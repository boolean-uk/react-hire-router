import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if ((props.people && id) || (props.hiredPeople && id)) {
      const matchingPerson = props.people.find((person) => 
      Number(person.id) === Number(id)
      );
      setPerson(matchingPerson)
    }
  })

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      <p>reaches into return step</p>
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
