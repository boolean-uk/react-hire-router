import PeopleListItem from './PeopleListItem'

function PeopleList({ people }) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={person.login.uuid} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
