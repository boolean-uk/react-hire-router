import PeopleListItem from './PeopleListItem'
import { usePeople } from '../../../context/PersonProvider'

function HiredPeople() {
  const { people } = usePeople();

  const hired = people.filter(person => person.hired);

  return (
    <ul>
      {hired.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default HiredPeople
