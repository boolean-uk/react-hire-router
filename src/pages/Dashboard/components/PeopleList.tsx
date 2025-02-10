import { Person } from '../../../objects/PersonInfoObjects'
import PeopleListItem from './PeopleListItem'

function PeopleList(props : {candidates : Person[]}) {
  const { candidates } = props

  return (
    <ul>
      {candidates.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
