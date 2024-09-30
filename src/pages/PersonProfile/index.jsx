import { useEffect, useState } from 'react'
import { useParams} from "react-router-dom";
import HireForm from './components/HireForm'

function PersonProfile({people, setHiredPeople}) {
  const { id } = useParams();
  const [person, setPerson] = useState(null)

  useEffect(() => {
    if(people && id) {
      const matchingPerson = people.find(person => (person.login.uuid) === (id))
      console.log(matchingPerson)
      setPerson(matchingPerson)
    }
  }, [people, id])

  if (!person) return <p>Loading...</p>
  
  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} />
    </article>
  )
}

export default PersonProfile
