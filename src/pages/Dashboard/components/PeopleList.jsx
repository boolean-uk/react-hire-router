import PeopleListItem from './PeopleListItem'
import { usePeople } from '../../../context/PersonProvider'

function PeopleList() {
  const { people } = usePeople();

  const notHired = people.filter(person => !person.hired);

  return (
    <ul>
      {notHired.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
