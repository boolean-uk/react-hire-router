import { useState } from 'react'
import HireForm from './components/HireForm'
import { Person } from '../../objects/PersonInfoObjects'
import { useParams } from 'react-router-dom'

function PersonProfile(props : {candidates : Person[];
                                hirePerson: (person : Person) => void;
                                hired: Person[]
}) {
  
  const { id } = useParams();
  const { candidates, hirePerson, hired } = props;
  const pers : Person = candidates.find((pers) => pers.login.uuid == id) ?? {} as Person;
  console.log(candidates)
  
  const [person, setPerson] = useState<Person>(pers)
  
  if (person == {} as Person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson={hirePerson} hired={hired} />
    </article>
  )
}

export default PersonProfile
