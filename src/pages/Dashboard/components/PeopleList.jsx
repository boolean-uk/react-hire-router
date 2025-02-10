import PeopleListItem from './PeopleListItem'

function PeopleList({people, onEdit}) {

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} onEdit={onEdit} />
      ))}
    </ul>
  )
}

export default PeopleList
