import { Person } from '../../../types'
import PeopleListItem from './PeopleListItem'

interface props {
  people: Person[]
}
function PeopleList(props : props) {
  const { people } = props
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
