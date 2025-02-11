import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom';

function PersonProfile( {people, hiredPeople, setHiredPeople} ) {
  const [person, setPerson] = useState(null)

  const { id } = useParams();

  useEffect(() => {
    if (people && id) {
        const matchingPerson = people.find((person) => 
            person.id.value == id
        //Not sure if this check is bad because it is too lenient?
        )
        setPerson(matchingPerson)
    }
  }, [people, id])


  if (!person) return <p>This person does not have a valid ID.</p>

  return (
    <article>
      <h2>
        {person.name.title} {person.name.first} {person.name.last}
      </h2>
      <ul>
        <img 
          src={person.picture.large}
          />
        <li>
          Email: {person.email}
        </li>
        <li>
          Tel. {person.phone}
        </li>
      </ul>
      <HireForm person={person} hiredPeple={hiredPeople} setHiredPeople={setHiredPeople} />
    </article>
  )
}

export default PersonProfile
