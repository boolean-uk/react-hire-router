import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const { id } = useParams()
  const { people, hiredPeople, setHiredPeople } = props;

  //Persons id = person.login.uuid
  useEffect(() => {
    if (people && id) {
      const matchingPerson = people.find((personToFind) => personToFind.login.uuid === id);
      setPerson(matchingPerson);
    }
  }, [people, id]); //om någon av dessa ändras re-renderas

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>
    </article>
  )
}

export default PersonProfile
