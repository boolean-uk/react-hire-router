import PeopleListItem from './PeopleListItem'

function PeopleList({people}) {


  return (
    <ul>
      {people.map((person, i) => (
        <PeopleListItem index={i} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
