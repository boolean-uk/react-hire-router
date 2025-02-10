import PeopleListItem from './PeopleListItem'

function PeopleList({ people }) {
  return (
    <ul className="list-group">
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
