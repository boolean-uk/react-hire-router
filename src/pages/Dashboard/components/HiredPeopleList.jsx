import PeopleListItem from './PeopleListItem'
import HiredPeopleListItem from './HiredPeopleListItem.jsx'

function PeopleList(props) {
  const { hiredPeople,  } = props

  console.log(hiredPeople)
  return (
    <ul>
      {hiredPeople.map((person, index) => (
        <HiredPeopleListItem key={index} hiredPeople={person} />
      ))}
    </ul>
  )
}

export default PeopleList
