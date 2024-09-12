import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props
  const filteredPeople = people.filter(person => person.id.name)

  return (
    <ul>
      {filteredPeople.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
